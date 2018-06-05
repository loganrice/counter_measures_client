import React, { Component } from 'react';
import 'whatwg-fetch';

import { connect } from 'react-redux';
import { signIn }  from '../actions/user-actions';
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
    console.log("email change");
    let email = event.target.value;
    this.setState({email: email})
    // store.dispatch(signIn(email, this.state.password))
  }

  handlePasswordChange(event) {
    let password = event.target.value;
    this.setState({password: password})
    // store.dispatch(signIn(this.state.email, password))
  }

  logIn() {
    var data;
    fetch(url.authentication, {
      method: 'post',
      body: '{ "user": {"email": "loganrice72@gmail.com", "password": "password"}}',
      headers: { 'Content-Type': 'application/json'}
    })
    .then((response) => {
      return response.json()
      console.log(response.json())
    }).then((d) => {
      this.props.signIn("email", "password", d.auth_token)
      console.log("dispatch")
      console.log(d);
    })
  }


  render () {
    // store.dispatch(signIn("user!!", "Password!!"))
    return (
      <SignInForm 
        email={this.props.email} 
        password={this.props.password} 
        logIn={this.logIn} 
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    email: 'email',
    password: 'password'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password, token) => dispatch(signIn(email, password, token))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);

