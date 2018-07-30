import React from 'react'
import { Link } from 'react-router-dom'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const CounterMeasures = function(){
  var root = "/"
  var login = "/login"
  return (
    <div>
      COUNTER MEASURES
      <Link to="/login">Login</Link>
    </div>
  );
}

export default CounterMeasures;

