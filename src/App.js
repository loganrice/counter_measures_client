import React, { Component } from 'react';

import './App.css';
import SignIn from './components/SignIn';
import logo from './logo.svg';
import store from './store';
import { signIn }  from './actions/user-actions';

class App extends Component {
  st() {
    console.log("store ", store.getState())
  }

  render() {
    store.dispatch(signIn("user!!", "Password!!"))
    return (
      <div>
        <h2 onClick={this.st}>Make Collaborative Problem Solving Easier</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <SignIn />
      </div>
    );
  }
}

export default App;
