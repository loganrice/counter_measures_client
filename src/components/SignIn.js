import React, { Component } from 'react';
import 'whatwg-fetch';
import url from '../constants/urls.js';

class SignIn extends Component {
  logIn() {
    var data;
    fetch(url.authentication, {
      method: 'post',
      body: JSON.stringify({ 
        user: {email: "loganrice72@gmail.com", password: "password"}
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json()
      console.log(response.json())
    }).then((d) => {
      console.log(d);
    })
  }

  render() {
    return (
      <form>
        <input type="email" name="email" placeholder="Email address"/>
        <input type="password" name="password" placeholder="Password"/>
        <button type="button" onClick={this.logIn}>Log in</button>
      </form>
    );
  }
}

export default SignIn;
