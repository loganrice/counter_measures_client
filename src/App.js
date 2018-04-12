import React, { Component } from 'react';

import './App.css';
import SignInContainer from './components/SignInContainer';
// import logo from './logo.svg';
        // <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div>
        <SignInContainer />
      </div>
    );
  }
}

export default App;
