import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Nav from './components/navbar/nav' 
import CreatePost from './components/post/CreatePost';
import HomePage from './components/homepage/homePage.js';
import loginPage from './components/auth/loginPage';
import SignupPage from './components/auth/SignupPage';
 
function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/login" component={loginPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/createpost" component={CreatePost}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
