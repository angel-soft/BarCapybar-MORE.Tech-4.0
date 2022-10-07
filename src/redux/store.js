import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers/rootReducer'
import { rootSaga } from './sagas/rootSaga'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['counter'], // What you don't wanna to persist
  whitelist: ['auth'], // What you want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)