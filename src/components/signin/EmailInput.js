import React, { Component } from 'react';
import store from '../../store';
import { signIn }  from '../../actions/user-actions';
  
class EmailInput extends Component {
  handleChange(event) {
    store.dispatch(signIn(event.target.value, "Password!!"))
  }

  render() {

    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" onChange={this.handleChange} type="email" name="email" id="signin__email" />
        <label className="mdl-textfield__label" htmlFor="signin__email">Email address</label>
      </div>
    );
  }
}

export default EmailInput;
