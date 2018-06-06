import { SIGNIN, UPDATEEMAIL, UPDATEPASSWORD} from  '../constants/actions';

const initialState = {
    email: '',
    password: '',
    token: ''
};

export default function(state=initialState, action) {
  switch (action.type) {
    case SIGNIN: {
      return Object.assign(initialState, state, action.payload)
    }
    case (UPDATEEMAIL): {
      return Object.assign(initialState, state, action.payload)
    }
    case (UPDATEPASSWORD): {
      return Object.assign(initialState, state, action.payload)
    }

    default:
      return state;
  }
}
