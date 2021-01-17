import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Directory from './Components/directory/directory.component';
import Header from './header/header.component';
import { Homepage } from './pages/homepage/homepage.component'; 
import Shop from './pages/homepage/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {

  const HatsPage = () => {
    return <h1>HATS</h1>
  }
 
  return (
    <div className="App">
    <Header/>
     <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route path='/signin' component={SignInAndSignUp} />
     </Switch>
    </div>
  );
}

export default App;
