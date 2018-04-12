import React, { Component } from 'react';

import './App.css';
import SignInContainer from './components/SignInContainer';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <SignInContainer />
      </div>
    );
  }
}

export default App;
