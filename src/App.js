import React, { Component } from 'react';

import './App.css';
import SignIn from './components/SignIn';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Make Collaborative Problem Solving Easier</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <SignIn />
      </div>
    );
  }
}

export default App;
