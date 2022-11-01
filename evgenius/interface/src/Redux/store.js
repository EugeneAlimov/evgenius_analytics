import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReduser from './slice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    login: authReduser,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    devtoolse: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
export default store


// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//     reducer: {

//     }
// })