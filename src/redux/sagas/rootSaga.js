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
    const { maticAmount, coinsAmount } = await api.walletBalance({ publicKey })

    yield put(walletBalanceSuccess({
        publicKey,
        maticAmount,
        coinsAmount
    }))
}

async function* listNftSaga({ transactionHash }) {
    const { tokens, wallet_id} = await api.listNft({ transactionHash})

    yield put(walletBalanceSuccess({
        transactionHash,
        tokens,
        wallet_id
    }))
}

export function* rootSaga() {
    yield takeEvery(WALLET_BALANCE_REQUEST, walletBalanceSaga)
    yield takeEvery(LIST_NFT_REQUEST, listNftSaga)
}