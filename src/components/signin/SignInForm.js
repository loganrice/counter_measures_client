import React from 'react';

import SubmitButton from './SubmitButton.js';
import EmailInput from './EmailInput.js';
import PasswordInput from './PasswordInput.js';
import logo from '../../logo.png';


const SignInForm = ({email, password, logIn, handleEmailChange, handlePasswordChange}) => {
  let containerStyle = { 
    height: '100vh',
    alignItems: 'center',
    textAlign: 'center'
  };

  let logoStyle = {
    height: '100px',
    margin: '50px 17px'
  }


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
    
            <EmailInput email={email} handleEmailChange={handleEmailChange}/> 
            <PasswordInput password={password} handlePasswordChange={handlePasswordChange}/>
            <SubmitButton  logIn={logIn}/>
          </form>
        </div>
      </div>
      <div className="mdl-layout-spacer"></div>
    </div>
  );
}



export default SignInForm;
