import React, { Component } from 'react';
  
const EmailInput = () => {
  return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input className="mdl-textfield__input" type="email" name="email" id="signin__email" />
      <label className="mdl-textfield__label" htmlFor="signin__email">Email address</label>
    </div>
  );
}

export default EmailInput;
