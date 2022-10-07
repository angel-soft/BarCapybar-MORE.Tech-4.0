import { takeEvery, put } from 'redux-saga/effects'
import { api } from '../api'
import * as apiActions from '../actions/apiActions'

import * as ActionTypes from '../actionTypes'

async function* transferMaticSaga({ payload: { fromPrivateKey, toPublicKey, amount } }) {
    const { transactionHash } = await api.transferMatic({
        fromPrivateKey,
        toPublicKey,
        amount
    })

    yield put(apiActions.transferMaticSuccess({
        fromPrivateKey,
        toPublicKey,
        amount,
        transactionHash
    }))
}

async function* transferRubleSaga({ payload: { fromPrivateKey, toPublicKey, amount } }) {
    const { transactionHash } = await api.transferRuble({
        fromPrivateKey,
        toPublicKey,
        amount
    })

    yield put(apiActions.transferRubleSuccess({
        fromPrivateKey,
        toPublicKey,
        amount,
        transactionHash
    }))
}

async function* transferNFTSaga({ payload: { fromPrivateKey, toPublicKey, tokenId } }) {
    const { transactionHash } = await api.transferNft({
        fromPrivateKey,
        toPublicKey,
        tokenId
    })

    yield put(apiActions.transferNftSuccess({
        fromPrivateKey,
        toPublicKey,
        tokenId,
        transactionHash
    }))
}

async function* transferStatusSaga({ payload: { transactionHash } }) {
    const { status } = await api.transferStatus({
        transactionHash
    })

    yield put(apiActions.transferStatusSuccess({
        transactionHash,
        status
    }))
}

async function* walletBalanceSaga({ payload: { publicKey } }) {
    const {
        maticAmount,
        coinsAmount
    } = await api.walletBalance({
        publicKey
    })

    yield put(apiActions.walletBalanceSuccess({
        publicKey,
        maticAmount,
        coinsAmount
    }))
}

async function* walletNftBalanceSaga({ payload: { publicKey } }) {
    const { balance } = await api.walletNftBalance({
        publicKey
    })

    yield put(apiActions.walletNftBalanceSuccess({
        publicKey,
        balance
    }))
}

async function* generateNftSaga({ payload: { toPublicKey, uri, nftCount } }) {
    const { transactionHash } = await api.generateNft({
        toPublicKey,
        uri,
        nftCount
    })

    yield put(apiActions.walletNftBalanceSuccess({
        toPublicKey,
        uri,
        nftCount,
        transactionHash
    }))
}

async function* listNftSaga({ payload: { transactionHash } }) {
    const {
        tokens,
        wallet_id
    } = await api.listNft({
        transactionHash
    })

    yield put(apiActions.listNftSuccess({
        transactionHash,
        tokens,
        wallet_id
    }))
}

async function* statusNftSaga({ payload: { tokenId } }) {
    const {
        uri,
        publicKey
    } = await api.statusNft({
        tokenId
    })

    yield put(apiActions.listNftSuccess({
        tokenId,
        uri,
        publicKey
    }))
}

async function* walletHistorySaga({ payload: { publicKey } }) {
    const {
        history
    } = await api.walletHistory({
        publicKey
    })

    yield put(apiActions.listNftSuccess({
        publicKey,
        history
    }))
}

export function* rootSaga() {
    yield takeEvery(ActionTypes.TRANSFER_MATIC_REQUEST, transferMaticSaga)
    yield takeEvery(ActionTypes.TRANSFER_RUBLE_REQUEST, transferRubleSaga)
    yield takeEvery(ActionTypes.TRANSFER_NFT_REQUEST, transferNFTSaga)
    yield takeEvery(ActionTypes.TRANSFER_STATUS_REQUEST, transferStatusSaga)
    yield takeEvery(ActionTypes.WALLET_BALANCE_REQUEST, walletBalanceSaga)
    yield takeEvery(ActionTypes.WALLET_NFT_BALANCE_REQUEST, walletNftBalanceSaga)
    yield takeEvery(ActionTypes.GENERATE_NFT_REQUEST, generateNftSaga)
    yield takeEvery(ActionTypes.LIST_NFT_REQUEST, listNftSaga)
    yield takeEvery(ActionTypes.STATUS_NFT_REQUEST, statusNftSaga)
    yield takeEvery(ActionTypes.WALLET_HISTORY_REQUEST, walletHistorySaga)
}