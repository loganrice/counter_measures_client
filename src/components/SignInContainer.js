import React, { Component } from 'react';
import 'whatwg-fetch';

import { connect } from 'react-redux';
import { signIn, updateUserEmail, updateUserPassword }  from '../actions/user-actions';
import SignInForm from './signin/SignInForm';
import url from '../constants/urls.js';


class SignInContainer extends Component {
  constructor () {
    super();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  handleEmailChange(event) {
    let email = event.target.value;
    this.props.updateUserEmail(email)
  }

  handlePasswordChange(event) {
    let password = event.target.value;
    this.props.updateUserPassword(password)
  }

  logIn() {
    var data;
    let email = this.props.user.email;
    let password = this.props.user.password; 
 
    fetch(url.authentication, {
      method: 'post',
      body: '{ "user": {"email": "' + email + '", "password": "' + password + '"}}',
      headers: { 'Content-Type': 'application/json'}
    })
    .then((response) => {
      return response.json()
    }).then((d) => {
      this.props.signIn(email, password, d.auth_token)
    })
  }


  render () {
    return (
      <SignInForm 
        email={this.props.email} 
        password={this.props.password} 
        logIn={this.logIn} 
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state, ownProps);
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password, token) => dispatch(signIn(email, password, token)),
    updateUserEmail: (email) => dispatch(updateUserEmail(email)),
    updateUserPassword: (email) => dispatch(updateUserPassword(email))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);

