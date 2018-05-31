import React, { Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';

import url from '../../constants/urls.js';
import { signIn } from '../../actions/user-actions';

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  }
};

class ConnectedSubmitButton extends Component {
  constructor() {
    super();
    this.logIn = this.logIn.bind(this);
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
      this.props.signIn("email", "password")
      console.log("dispatch")
      console.log(d);
    })
  }


  render() {
    const btnClassNames = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
    return (
      <button type="button" className={btnClassNames} onClick={this.logIn}>
        Log In
      </button>
    )
  }

}

const SubmitButton = connect(null, mapDispatchToProps)(ConnectedSubmitButton);  

export default SubmitButton;
