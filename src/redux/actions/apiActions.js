import { toast } from "react-toastify";

import {
  TRANSFER_MATIC_REQUEST,
  TRANSFER_MATIC_SUCCESS,
  TRANSFER_RUBLE_REQUEST,
  TRANSFER_RUBLE_SUCCESS,
  TRANSFER_NFT_REQUEST,
  TRANSFER_NFT_SUCCESS,
  TRANSFER_STATUS_REQUEST,
  TRANSFER_STATUS_SUCCESS,
  WALLET_BALANCE_REQUEST,
  WALLET_BALANCE_SUCCESS,
  WALLET_NFT_BALANCE_REQUEST,
  WALLET_NFT_BALANCE_SUCCESS,
  GENERATE_NFT_REQUEST,
  GENERATE_NFT_SUCCESS,
  LIST_NFT_REQUEST,
  LIST_NFT_SUCCESS,
  STATUS_NFT_REQUEST,
  STATUS_NFT_SUCCESS,
  WALLET_HISTORY_REQUEST,
  WALLET_HISTORY_SUCCESS,
} from "../actionTypes";

export const transferMaticRequest = ({
  fromPrivateKey,
  toPublicKey,
  amount,
}) => ({
  type: TRANSFER_MATIC_REQUEST,
  payload: {
    fromPrivateKey,
    toPublicKey,
    amount,
  },
});
export const transferMaticSuccess = ({
  fromPrivateKey,
  toPublicKey,
  amount,
  transactionHash,
}) => ({
  type: TRANSFER_MATIC_SUCCESS,
  payload: {
    fromPrivateKey,
    toPublicKey,
    amount,
    transactionHash,
  },
});

export const transferRubleRequest = ({
  fromPrivateKey,
  toPublicKey,
  amount,
}) => ({
  type: TRANSFER_RUBLE_REQUEST,
  payload: {
    fromPrivateKey,
    toPublicKey,
    amount,
  },
});
export const transferRubleSuccess = ({
  fromPrivateKey,
  toPublicKey,
  amount,
  transactionHash,
}) => {

  toast.success(`Транзакция прошла успешно`);
  return {
    type: TRANSFER_RUBLE_SUCCESS,
    payload: {
    fromPrivateKey,
    toPublicKey,
    amount,
    transactionHash,
  },
  }
};

export const transferNftRequest = ({
  fromPrivateKey,
  toPublicKey,
  tokenId,
}) => ({
  type: TRANSFER_NFT_REQUEST,
  payload: {
    fromPrivateKey,
    toPublicKey,
    tokenId,
  },
});
export const transferNftSuccess = ({
  fromPrivateKey,
  toPublicKey,
  tokenId,
  transactionHash,
}) => ({
  type: TRANSFER_NFT_SUCCESS,
  payload: {
    fromPrivateKey,
    toPublicKey,
    tokenId,
    transactionHash,
  },
});

export const transferStatusRequest = ({ transactionHash }) => ({
  type: TRANSFER_STATUS_REQUEST,
  payload: {
    transactionHash,
  },
});
export const transferStatusSuccess = ({ transactionHash, status }) => ({
  type: TRANSFER_STATUS_SUCCESS,
  payload: {
    transactionHash,
    status,
  },
});

export const walletBalanceRequest = ({ publicKey }) => ({
  type: WALLET_BALANCE_REQUEST,
  payload: {
    publicKey,
  },
});
export const walletBalanceSuccess = ({
  publicKey,
  maticAmount,
  coinsAmount,
}) => ({
  type: WALLET_BALANCE_SUCCESS,
  payload: {
    publicKey,
    maticAmount,
    coinsAmount,
  },
});

export const walletNftBalanceRequest = ({ publicKey }) => ({
  type: WALLET_NFT_BALANCE_REQUEST,
  payload: {
    publicKey,
  },
});
export const walletNftBalanceSuccess = ({ publicKey, balance }) => ({
  type: WALLET_NFT_BALANCE_SUCCESS,
  payload: {
    publicKey,
    balance,
  },
});

export const generateNftRequest = ({ transactionHash }) => ({
  type: GENERATE_NFT_REQUEST,
  payload: {
    transactionHash,
  },
});
export const generateNftSuccess = ({
  transactionHash,
  toPublicKey,
  uri,
  nftCount,
}) => ({
  type: GENERATE_NFT_SUCCESS,
  payload: {
    transactionHash,
    toPublicKey,
    uri,
    nftCount,
  },
});

export const listNftRequest = ({ transactionHash }) => ({
  type: LIST_NFT_REQUEST,
  payload: {
    transactionHash,
  },
});
export const listNftSuccess = ({ transactionHash, wallet_id, tokens }) => ({
  type: LIST_NFT_SUCCESS,
  payload: {
    transactionHash,
    wallet_id,
    tokens,
  },
});

export const statusNftRequest = ({ tokenId }) => ({
  type: STATUS_NFT_REQUEST,
  payload: {
    tokenId,
  },
});
export const statusNftSuccess = ({ tokenId, uri, publicKey }) => ({
  type: STATUS_NFT_SUCCESS,
  payload: {
    tokenId,
    uri,
    publicKey,
  },
});

export const walletHistoryRequest = ({ publicKey }) => ({
  type: WALLET_HISTORY_REQUEST,
  payload: {
    publicKey,
  },
});
export const walletHistorySuccess = ({ publicKey, history }) => ({
  type: WALLET_HISTORY_SUCCESS,
  payload: {
    publicKey,
    history,
  },
});
