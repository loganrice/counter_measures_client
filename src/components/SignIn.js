import React, { Component } from 'react';

import SubmitButton from './signin/SubmitButton.js';
import EmailInput from './signin/EmailInput.js';
import PasswordInput from './signin/PasswordInput.js';

const SignIn = () => {
  return (
    <div>
      <form>
        <EmailInput /> 
        <PasswordInput />
        <SubmitButton  />
      </form>
    </div>
  );
}

export default SignIn;

