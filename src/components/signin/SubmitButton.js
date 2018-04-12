import React, { Component } from 'react';
import 'whatwg-fetch';

import url from '../../constants/urls.js';

export default class SubmitButton extends Component {
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
      console.log("response")
    }).then((d) => {
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
