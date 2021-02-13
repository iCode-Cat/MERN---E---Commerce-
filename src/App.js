import React, { useState, useEffect} from 'react';
import { Route, Switch, useHistory, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux'
import {setCurrentUser} from './pages/redux/user/user-action';
import './App.css';
import Directory from './Components/directory/directory.component';
import Header from './header/header.component';
import { Homepage } from './pages/homepage/homepage.component'; 
import Shop from './pages/homepage/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth, createUserProfileDocument } from './firebase/firebase.utility'



function App(props) {
  const { setCurrentUser , currentUser } = props;
  
  console.log(props);
  // const [currentUser, setCurrentUser] = useState({user:null});
  let history = useHistory();

  useEffect(()=> {
    
    auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({id:snapShot.id,
          ...snapShot.data()

          })

        })
      }
      
      setCurrentUser(userAuth)
      
    });

    // if(!currentUser.userAuth) {
    //   history.push('/signin');
    // }
    
  }, [])

  console.log(setCurrentUser);
  
  
  return (
    <div className="App">
    <Header/>
     <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route exact path='/signin' render={()=>currentUser ? <Redirect to="/"/>:<SignInAndSignUp />} />
     </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
