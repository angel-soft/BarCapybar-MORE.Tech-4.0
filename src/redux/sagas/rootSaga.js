import { takeEvery, put } from "redux-saga/effects";
import { api } from "../api";
import * as apiActions from "../actions/apiActions";

import * as ActionTypes from "../actionTypes";

function* transferMaticSaga({
  payload: { fromPrivateKey, toPublicKey, amount },
}) {
  const { transactionHash } = yield api.transferMatic({
    fromPrivateKey,
    toPublicKey,
    amount,
  });

  yield put(
    apiActions.transferMaticSuccess({
      fromPrivateKey,
      toPublicKey,
      amount,
      transactionHash,
    })
  );
}

function* transferRubleSaga({
  payload: { fromPrivateKey, toPublicKey, amount },
}) {
  const { transactionHash } = yield api.transferRuble({
    fromPrivateKey,
    toPublicKey,
    amount,
  });

  yield put(
    apiActions.transferRubleSuccess({
      fromPrivateKey,
      toPublicKey,
      amount,
      transactionHash,
    })
  );
}

function* transferNFTSaga({
  payload: { fromPrivateKey, toPublicKey, tokenId },
}) {
  const { transactionHash } = yield api.transferNft({
    fromPrivateKey,
    toPublicKey,
    tokenId,
  });

  yield put(
    apiActions.transferNftSuccess({
      fromPrivateKey,
      toPublicKey,
      tokenId,
      transactionHash,
    })
  );
}

function* transferStatusSaga({ payload: { transactionHash } }) {
  const { status } = yield api.transferStatus({
    transactionHash,
  });

  yield put(
    apiActions.transferStatusSuccess({
      transactionHash,
      status,
    })
  );
}

function* walletBalanceSaga({ payload: { publicKey } }) {
  const { maticAmount, coinsAmount } = yield api.walletBalance({
    publicKey,
  });

  yield put(
    apiActions.walletBalanceSuccess({
      publicKey,
      maticAmount,
      coinsAmount,
    })
  );
}

function* walletNftBalanceSaga({ payload: { publicKey } }) {
  const { balance } = yield api.walletNftBalance({
    publicKey,
  });

  yield put(
    apiActions.walletNftBalanceSuccess({
      publicKey,
      balance,
    })
  );
}

function* generateNftSaga({ payload: { toPublicKey, uri, nftCount } }) {
  const { transactionHash } = yield api.generateNft({
    toPublicKey,
    uri,
    nftCount,
  });

  yield put(
    apiActions.walletNftBalanceSuccess({
      toPublicKey,
      uri,
      nftCount,
      transactionHash,
    })
  );
}

function* listNftSaga({ payload: { transactionHash } }) {
  const { tokens, wallet_id } = yield api.listNft({
    transactionHash,
  });

  yield put(
    apiActions.listNftSuccess({
      transactionHash,
      tokens,
      wallet_id,
    })
  );
}

function* statusNftSaga({ payload: { tokenId } }) {
  const { uri, publicKey } = yield api.statusNft({
    tokenId,
  });

  yield put(
    apiActions.listNftSuccess({
      tokenId,
      uri,
      publicKey,
    })
  );
}

function* walletHistorySaga({ payload: { publicKey } }) {
  const { history } = yield api.walletHistory({
    publicKey,
  });

  yield put(
    apiActions.listNftSuccess({
      publicKey,
      history,
    })
  );
}

export function* rootSaga() {
  yield takeEvery(ActionTypes.TRANSFER_MATIC_REQUEST, transferMaticSaga);
  yield takeEvery(ActionTypes.TRANSFER_RUBLE_REQUEST, transferRubleSaga);
  yield takeEvery(ActionTypes.TRANSFER_NFT_REQUEST, transferNFTSaga);
  yield takeEvery(ActionTypes.TRANSFER_STATUS_REQUEST, transferStatusSaga);
  yield takeEvery(ActionTypes.WALLET_BALANCE_REQUEST, walletBalanceSaga);
  yield takeEvery(ActionTypes.WALLET_NFT_BALANCE_REQUEST, walletNftBalanceSaga);
  yield takeEvery(ActionTypes.GENERATE_NFT_REQUEST, generateNftSaga);
  yield takeEvery(ActionTypes.LIST_NFT_REQUEST, listNftSaga);
  yield takeEvery(ActionTypes.STATUS_NFT_REQUEST, statusNftSaga);
  yield takeEvery(ActionTypes.WALLET_HISTORY_REQUEST, walletHistorySaga);
}
