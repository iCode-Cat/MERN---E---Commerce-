import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Directory from './Components/directory/directory.component';
import Header from './header/header.component';
import { Homepage } from './pages/homepage/homepage.component'; 
import Shop from './pages/homepage/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth, createUserProfileDocument } from './firebase/firebase.utility'



function App(props) {
  console.log(props.state);
  const [currentUser, setCurrentUser] = useState({user:null});
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
      
      setCurrentUser({userAuth})
      
    });

    // if(!currentUser.userAuth) {
    //   history.push('/signin');
    // }
    
  }, [])
  
  
  console.log(currentUser);
  return (
    <div className="App">
    <Header currentUser={currentUser} />
     <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route path='/signin' component={SignInAndSignUp} />
     </Switch>
    </div>
  );
}

export default App;
