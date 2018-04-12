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
    let styles = { 
      height: '100vh',
      alignItems: 'center',
      textAlign: 'center'
    };

    store.dispatch(signIn("user!!", "Password!!"))
    return (
      <div className="content-grid mdl-grid" style={styles}>
        <div className="mdl-layout-spacer"></div>

        <div class=" mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Login</h2>
          </div>
          <div onClick={this.st} class="mdl-card__supporting-text">
            Make Collaborative Problem Solving Easier
          </div>
          <div class="mdl-card__actions mdl-card--border">
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

