import { LOGOUT, SIGNUP } from "../actionTypes"

const initialState = {
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGNUP: {
      return {
        state, 
        isAuth: true,
        ...action.payload}
    }

    case LOGOUT: {
      return initialState
    }
    
    default:{
      return state
    }
  }
}