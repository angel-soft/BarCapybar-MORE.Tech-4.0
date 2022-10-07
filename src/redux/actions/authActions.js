import { LOGOUT, SIGNUP } from "../actionTypes"

export const signup = (user) => ({
  type: SIGNUP,
  payload: user
})

export const logout = () => ({
  type: LOGOUT,
})