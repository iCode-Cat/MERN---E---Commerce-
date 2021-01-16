import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Directory from './Components/directory/directory.component';
import Header from './header/header.component';
import { Homepage } from './pages/homepage/homepage.component'; 
import Shop from './pages/homepage/shop/shop.component';

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
     
     </Switch>
    </div>
  );
}

export default App;
