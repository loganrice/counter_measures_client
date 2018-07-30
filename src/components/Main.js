import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignInContainer from './SignInContainer';
import CounterMeasures from '../containers/CounterMeasures';
import ProtectedRoute from './Protected';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = function(){
  var root = "/"
  var login = "/login"

  return (<main>
    <Switch>
      <Route exact path={login} component={SignInContainer}/>
      <ProtectedRoute exact path={root} authenticated={false} component={CounterMeasures}/>
    </Switch>
  </main>);
}

export default Main

