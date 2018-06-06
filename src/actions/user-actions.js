import { SIGNIN, UPDATEEMAIL, UPDATEPASSWORD } from  '../constants/actions';

export function signIn(email, password, token) {
  return {
    type: SIGNIN,
    payload: { email, password, token }
  }
}

export function updateUserEmail(email) {
  return {
    type: UPDATEEMAIL,
    payload: { email }
  }
}

export function updateUserPassword(password) {
  return {
    type: UPDATEPASSWORD,
    payload: { password }
  }
}
