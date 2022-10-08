import * as ActionTypes from "../actionTypes";
import usersData from "../../data/users.json";

const initialState = {
  isAuth: false,
  user: {},
  users: usersData,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      const { login, password } = action.payload;
      const found = state.users.find((user) => {
        if (login === user.login && password === user.password) {
          return true;
        }
        return false;
      });

      if (found) {
        return {
          ...state,
          isAuth: true,
          user: found,
        };
      }
      return state;
    }

    case ActionTypes.LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case ActionTypes.WALLET_NFT_BALANCE_SUCCESS: {
      const { publicKey, balance } = action.payload;

      const index = state.users.findIndex(
        (user) => user.publicKey === publicKey
      );
      if (index) {
        const [...users] = state.users;
        const user = users[index];
        const newUser = { ...user };
        newUser["nftbalance"] = balance;
        users.splice(index, 1, newUser);

        return {
          ...state,
          users: [...users],
        };
      }

      return state;
    }

    case ActionTypes.WALLET_BALANCE_SUCCESS: {
      const { publicKey, maticAmount, coinsAmount } = action.payload;

      if(state.user.wallet.publicKey === publicKey) {
        return {
          ...state,
          user: {
            ...state.user.wallet,
            maticAmount,
            coinsAmount,
          }
        };
      }
      return state;

    }

    default: {
      return state;
    }
  }
};
