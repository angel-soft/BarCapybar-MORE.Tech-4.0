import { LOGOUT, LOGIN } from "../actionTypes";
import usersData from "../../data/users.json";

const initialState = {
  isAuth: false,
  user: {},
  users: usersData,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN: {

      const { login, password } = action.payload;
      const found = state.users.find(user => {
        if (login === user.login && password === user.password) {
          return true;
        }
        return false;
      });

      if (found) {
        return {
          ...state, 
          isAuth: true,
          user: found
        }
      }
      return state
    }

    case LOGOUT: {
      return {
        ...state, 
        isAuth: false,
      }
    }
    
    default:{
      return state
    }
  }
}