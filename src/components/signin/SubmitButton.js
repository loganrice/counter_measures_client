import React, { Component } from 'react';


export default class SubmitButton extends Component {
  render() {
    const btnClassNames = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
    return (
      <button type="button" className={btnClassNames} onClick={this.props.logIn}>
        Log In
      </button>
    )
  }

};


