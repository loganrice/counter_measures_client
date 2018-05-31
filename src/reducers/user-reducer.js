import  { SIGNIN }  from '../actions/user-actions';

const initialState = {
  user: {
    email: 'initialEmail',
    password: 'initialPassword',
  }
}

export default function(state=initialState, action) {
  switch (action.type) {
    case SIGNIN: {
      return Object.assign({}, state, action.payload)
    }
    default:
      return state;
  }
}
