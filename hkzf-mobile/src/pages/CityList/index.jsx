import React from 'react';
import { Select } from 'antd';
import { useSelector, useDispatch  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { changeCity } from '../../reducer/citySlice';

function CityList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { city } = useSelector(state => state.citys)
    const cityList = ['北京' , '上海', '深圳', '杭州', '南京', '成都', '武汉', '广州', '天津', '苏州']
    const renderedCitys = cityList.map(city => (
        <Select.Option key={city} value={city}>
            {city}
        </Select.Option>
    ))
    return ( 
        <div className='city'>
            <div className='city-title'>选择城市</div>
            <div className='city-list'>
                <Select
                    open={true}
                    showArrow={false}
                    bordered={false}
                    placeholder="选择城市"
                    listHeight={500}
                    style={{width: '100%'}}
                    value={city}
                    onChange={(value) => {
                        dispatch(changeCity(value));
                        navigate('/home/index')
                    }}
                >
                {renderedCitys}
                </Select>
            </div>
        </div>
    );
}

export default CityList;