import { LOGOUT, LOGIN } from "../actionTypes"

const initialState = {
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN: {
      return {
        ...action.payload,
        isAuth: true }
    }

    case LOGOUT: {
      return initialState
    }
    
    default:{
      return state
    }
  }
}