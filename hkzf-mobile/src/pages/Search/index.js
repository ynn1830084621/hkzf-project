import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Input, Slider, InputNumber, Radio  } from 'antd';
import './index.scss'
const { TextArea } = Input;
function Search() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState([]);

  const onChange = (newValue) => {
    console.log(newValue, '2222')
    setInputValue(newValue);
  };
  return (
    <div className='search'>
      <div className='back' onClick={() => navigate(-1)}>
        <ArrowLeftOutlined />
      </div>
      <div className='search-content'>
        <h2>你想在哪里租房？</h2>
        <Input
          className='search-input'
          placeholder="请输入地铁站、商圈、工作地点或小区"
        />
        <div className='example'>例:距离朝阳门地铁站骑行15分钟</div>
        <h2>
          您的房租预算？
          <span>
            {inputValue.length === 0 ? '' : `${inputValue[0]}-${inputValue[1]}元`}
          </span>
        </h2>
        <Slider
          min={100}
          max={8000}
          step={100}
          range={{
            draggableTrack: true,
          }}
          defaultValue={[0, 8000]}
          onChange={onChange}
        />
        <h2>计划入住日期？</h2>
        <Radio.Group
          buttonStyle="solid"
          style={{
            marginTop: 16,
          }}
        >
          <Radio.Button value="a">3天之内</Radio.Button>
          <Radio.Button value="b">一周之内</Radio.Button>
          <Radio.Button value="c">两周之内</Radio.Button>
          <Radio.Button value="d">不限</Radio.Button>
        </Radio.Group>
        <h2>您的租房方式？</h2>
        <Radio.Group
          buttonStyle="solid"
          style={{
            marginTop: 16,
          }}
        >
          <Radio.Button value="a">整租</Radio.Button>
          <Radio.Button value="b">合租</Radio.Button>
          <Radio.Button value="c">不限</Radio.Button>
        </Radio.Group>
        <h2>其他需求</h2>
        <TextArea 
          rows={4} 
          placeholder="备注其他需求，帮组我们精准定位你的诉求"
        />
      </div>
      <button className='submit'>发送需求</button>
    </div>
  )
}

export default Search