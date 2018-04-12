import React, { Component } from 'react';

import SubmitButton from './signin/SubmitButton.js';
import EmailInput from './signin/EmailInput.js';
import PasswordInput from './signin/PasswordInput.js';
import store from '../store';
import { signIn }  from '../actions/user-actions';
import logo from '../logo.png';


class SignInContainer extends Component {
  st() {
    console.log("store ", store.getState())
  }

  render () {
    let containerStyle = { 
      height: '100vh',
      alignItems: 'center',
      textAlign: 'center'
    };

    let logoStyle = {
      height: '100px',
      margin: '50px 17px'
    }

    store.dispatch(signIn("user!!", "Password!!"))
    return (
      <div className="content-grid mdl-grid" style={containerStyle}>
        <div className="mdl-layout-spacer"></div>
        <div className=" mdl-card mdl-shadow--2dp">
          <img src={logo} className="App-logo" style={logoStyle} alt="logo" />
          <div className="mdl-card__title">
            <br />
            <h2 className="mdl-card__title-text" style={{color: '#00c1b7'}}>Login</h2>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <form>
              <EmailInput /> 
              <PasswordInput />
              <SubmitButton  />
            </form>
          </div>
        </div>
        <div className="mdl-layout-spacer"></div>
      </div>
    );
  }
}

export default SignInContainer;

