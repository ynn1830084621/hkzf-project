import { createSlice } from '@reduxjs/toolkit';


export const citySlice = createSlice({
    name: 'citys',
    initialState: {
        city: '上海',
        collectNum: '',
        housesList: [
            {id: 1, address: '桥北·威尼斯水城', price: '￥1339/月', flag: false  },
            {id: 2, address: '泰山街道·荣盛景秀澜山', price: '￥1160/月', flag: false  },
            {id: 3, address: '桥北·江岸水城', price: '￥990/月', flag: false  },
            {id: 4, address: '百家湖·湖滨世纪花园', price: '￥1590/月', flag: false  },
            {id: 5, address: '岔路口·南方花园B组团', price: '￥1430/月', flag: false  },
            {id: 6, address: '高新区·高新花苑', price: '￥990/月', flag: false  },
        ],
    },
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload
        },
        changeFlag: (state, action) => {
            console.log(action, 'action')
            state.housesList.map(item => {
                if (item.id === action.payload.id) {
                    item.flag = action.payload.flag ? false : true
                }
            })
        },
    }
})

export const { changeCity, changeFlag } = citySlice.actions
export default citySlice.reducer