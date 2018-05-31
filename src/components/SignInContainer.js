import React, { Component } from 'react';

import SubmitButton from './signin/SubmitButton.js';
import EmailInput from './signin/EmailInput.js';
import PasswordInput from './signin/PasswordInput.js';
import { connect } from 'react-redux';
import { signIn }  from '../actions/user-actions';
import logo from '../logo.png';


class SignInContainer extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    let email = event.target.value;
    this.setState({email: email})
    // store.dispatch(signIn(email, this.state.password))
  }

  handlePasswordChange(event) {
    let password = event.target.value;
    this.setState({password: password})
    // store.dispatch(signIn(this.state.email, password))
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

    // store.dispatch(signIn("user!!", "Password!!"))
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
              <EmailInput email={this.state.email} handleChange={this.handleEmailChange}/> 
              <PasswordInput password={this.state.password}/>
              <SubmitButton  />
            </form>
          </div>
        </div>
        <div className="mdl-layout-spacer"></div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    email: 'email',
    password: 'password'
  }
}

export default connect(mapStateToProps)(SignInContainer);

