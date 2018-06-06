import React, { Component } from 'react';
  
const PasswordInput = (handlePasswordChange, password) => {
  return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input 
        className="mdl-textfield__input" 
        type="password" 
        onChange={handlePasswordChange.handlePasswordChange} 
        value={password.password}
        name="password" 
        id="signin__password" 
        />
      <label className="mdl-textfield__label" htmlFor="signin__password">Password</label>
    </div>
  );
}

export default PasswordInput;
