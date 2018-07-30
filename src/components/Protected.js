import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import SignInContainer from './SignInContainer';
import CounterMeasures from '../containers/CounterMeasures';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class ProtectedRoute extends React.Component {
  render() {
    const { component: Component, ...props } = this.props;
    var root = "/"
    var login = "/login"

    return (
      <Route 
        {...props} 
        render={props => (
          this.props.authenticated ?
            <Component  {...props} /> :
            <Redirect to='/login' />
        )} 
      />
    );
  };
};

export default ProtectedRoute;

