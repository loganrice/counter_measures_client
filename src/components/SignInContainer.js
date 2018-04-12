import React, { Component } from 'react';

import SubmitButton from './signin/SubmitButton.js';
import EmailInput from './signin/EmailInput.js';
import PasswordInput from './signin/PasswordInput.js';
import store from '../store';
import { signIn }  from '../actions/user-actions';

class SignInContainer extends Component {
  st() {
    console.log("store ", store.getState())
  }

  render () {
    store.dispatch(signIn("user!!", "Password!!"))
    return (
      <div className="content-grid mdl-grid">
        <div class="mdl-layout-spacer"></div>
        <div className="mdl-cell mdl-cell--3-col-col-phone">
          <h2 onClick={this.st}>Make Collaborative Problem Solving Easier</h2>
          <form>
            <EmailInput /> 
            <PasswordInput />
            <SubmitButton  />
          </form>
        </div>
        <div class="mdl-layout-spacer"></div>
      </div>
    );
  }
}

export default SignInContainer;

