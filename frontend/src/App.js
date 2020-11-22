import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/navbar/nav' 
import Login from './components/auth/loginPage'
import Signup from './components/auth/SignupPage';
import CreatePost from './components/post/CreatePost';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DoubtFull Web App</h1>
        <Nav/>
        <Signup/>
        <Login/>
        <CreatePost/>

      </header>
    </div>
  );
}

export default App;
