import  { SIGNIN }  from '../actions/user-actions';

const initialState = {
    email: '',
    password: '',
    token: ''
};

export default function(state=initialState, action) {
  switch (action.type) {
    case SIGNIN: {
      return Object.assign({}, state, action.payload)
    }
    default:
      return state;
  }
}
