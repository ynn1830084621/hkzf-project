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
        userList: [
            { name: 'ynn', password: 1 },
            { name: 'hgf', password: 2 },
        ],
        commentList: [
            {id: 1, number:1001, title: "出闲置", author: '小晴', comment: '小浣熊电炖锅，60包邮出，需要的联系'},
            {id: 2, number:1002, title: "想恋爱", author: 'Queenie', comment: '还是希望能遇到可以相敬如宾的人,一起走人生的旅程'},
            {id: 3, number:1003, title: "转租", author: '小f', comment: '不到一千，干净整齐，独立厕所，有意向联系'},
            {id: 4, number:1004, title: "找室友", author: '乔儿', comment: '有没有小姐姐一起住，房租好商量'},
        ]

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