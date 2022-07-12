import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../reducer/citySlice'

export default configureStore({
    reducer: {
        citys: cityReducer
    }
})