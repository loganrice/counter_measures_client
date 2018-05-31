export const SIGNIN  = 'SIGNIN';

export function signIn(email, password, token) {
  return {
    type: SIGNIN,
    payload: { email, password, token }
  }
}
