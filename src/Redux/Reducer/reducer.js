
import { combineReducers } from 'redux';


const reduce = (state = {}, action) => {

    switch (action.type) {
      case "login":
        return { ...state, user_login: action.payload }
        case "userDate":
        return { ...state, userDate: action.payload }
      default:
        return state;
  
    }
  };

  const Reducers = combineReducers({
    Data: reduce,
});

export default Reducers