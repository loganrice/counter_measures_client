export const SIGNIN  = 'SIGNIN';

export function signIn(email, password) {
  return {
    type: SIGNIN,
    payload: { email, password }
  }
}
