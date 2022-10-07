import * as TYPE from "../actionTypes";
import usersData from "../../data/users.json";

const initialState = {
  isAuth: true,
  user: {},
  users: usersData,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case TYPE.LOGIN: {
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

    case TYPE.LOGOUT: {
      return {
        ...state, 
        isAuth: false,
      }
    }

    case TYPE.WALLET_NFT_BALANCE_SUCCESS: {
      const { publicKey, balance } = action.payload;

      const index = state.users.findIndex((user) => user.publicKey === publicKey);
      if(index) {
        const [...users] = state.users;
        const {...newUser} = users[index];
        newUser.nftbalance = balance;
        users.splice(index, 1, newUser);

        return {
          ...state, 
          users: [...users],
        }
      }

      return state
    }
    
    default:{
      return state
    }
  }
}