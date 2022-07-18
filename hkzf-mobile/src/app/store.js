import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import cityReducer from '../reducer/citySlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// 创建reducer对象
const reducer = {
    citys: cityReducer,
}
// 缓存数据配置
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["citys"], //需要缓存的数据
    blacklist:[], //不需要缓存的数据
}
//合并
const rootReducer  = combineReducers(reducer)
const persistedReducer = persistReducer(persistConfig, rootReducer)
// 调试redux
const store = configureStore({ 
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    })
})
export const persistor = persistStore(store)
export default store
