import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
    name: 'citys',
    initialState: {
        city: '上海',
        collectNum: 0,
    },
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload
        },
        addCount: state => {
            state.collectNum += 1
        }
    }
})

export const { changeCity, addCount } = citySlice.actions
export default citySlice.reducer