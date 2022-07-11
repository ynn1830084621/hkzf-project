import React, { useState } from 'react';
import { Select } from 'antd';
import './index.scss'


const OPTIONS = ['北京' , '上海', '深圳', '杭州', '南京', '成都', '武汉', '广州', '天津', '苏州']

function CityList() {
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o))
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
                    value={selectedItems}
                    onChange={setSelectedItems}
                    style={{width: '100%'}}
                >
                {filteredOptions.map((item) => (
                    <Select.Option key={item} value={item}>
                    {item}
                    </Select.Option>
                ))}
                </Select>
            </div>
        </div>
    );
}

export default CityList;