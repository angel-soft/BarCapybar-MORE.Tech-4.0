import { takeEvery, put } from 'redux-saga/effects'
import { api } from '../api'
import { walletBalanceSuccess } from '../actions/apiActions'

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

async function* walletBalanceSaga({ publicKey }) {
    const { maticAmount, coinsAmount } = await api.walletBalance({})

    yield put(walletBalanceSuccess({
        publicKey,
        maticAmount,
        coinsAmount
    }))
}

export function* rootSaga() {
    yield takeEvery(WALLET_BALANCE_REQUEST, walletBalanceSaga)
}