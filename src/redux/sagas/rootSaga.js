import { takeEvery, put } from 'redux-saga/effects'
import { api } from '../api'
import {listNftSuccess, transferMaticSuccess, transferRubleSuccess, walletBalanceSuccess} from '../actions/apiActions'

import {
    TRANSFER_MATIC_REQUEST,
    TRANSFER_MATIC_SUCCESS,
    TRANSFER_RUBLE_REQUEST,
    TRANSFER_NFT_REQUEST,
    TRANSFER_STATUS_REQUEST,
    WALLET_BALANCE_REQUEST,
    WALLET_NFT_BALANCE_REQUEST,
    GENERATE_NFT_REQUEST,
    LIST_NFT_REQUEST,
    STATUS_NFT_REQUEST,
    WALLET_HISTORY_REQUEST,
} from '../actionTypes'

async function* transferMaticSaga({ payload: { fromPrivateKey, toPublicKey, amount } }) {
    const { transactionHash } = await api.transferMatic({ fromPrivateKey, toPublicKey, amount })

    yield put(transferMaticSuccess({
        fromPrivateKey,
        toPublicKey,
        amount,
        transactionHash
    }))
}
async function* transferRubleSaga({ payload: { fromPrivateKey, toPublicKey, amount } }) {
    const { transactionHash } = await api.transferRuble({ fromPrivateKey, toPublicKey, amount })

    yield put(transferRubleSuccess({
        fromPrivateKey,
        toPublicKey,
        amount,
        transactionHash
    }))
}
async function* walletBalanceSaga({ payload: { publicKey } }) {
    const { maticAmount, coinsAmount } = await api.walletBalance({ publicKey })

    yield put(walletBalanceSuccess({
        publicKey,
        maticAmount,
        coinsAmount
    }))
}

async function* listNftSaga({ payload: { transactionHash } }) {
    const { tokens, wallet_id} = await api.listNft({ transactionHash })

    yield put(listNftSuccess({
        transactionHash,
        tokens,
        wallet_id
    }))
}

export function* rootSaga() {
    yield takeEvery(TRANSFER_MATIC_REQUEST, transferMaticSaga)
    yield takeEvery(TRANSFER_RUBLE_REQUEST, transferRubleSaga)
    yield takeEvery(WALLET_BALANCE_REQUEST, walletBalanceSaga)
    yield takeEvery(LIST_NFT_REQUEST, listNftSaga)
}