import React from 'react';
import { ArrowLeftOutlined, CalendarOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Tag } from 'antd';
import './index.scss'
import bedroom  from '../../assets/images/house/bedroom.png'
import living  from '../../assets/images/house/living.png'
import cook  from '../../assets/images/house/cook.png'
import bathroom  from '../../assets/images/house/bathroom.png'

function Detail() {
  const navigate = useNavigate()
  const imgs = [
    {id: 1, img: bedroom, title: '卧室' },
    {id: 2, img: living, title: '起居室' },
    {id: 3, img: cook, title: '厨房' },
    {id: 4, img: bathroom, title: '公共厕所' },
  ]
  const area = [
    {id: 1, title: '面积', text: '14m^2'},
    {id: 2, title: '朝向', text: '朝南'},
    {id: 3, title: '户型', text: '4室1厅1卫'},
    {id: 4, title: '楼层', text: '7/11'},
  ]
  return (
    <div className='detail'>
      <div className='head'>
        <span className='back'><ArrowLeftOutlined /></span>
        <span className='house'>威尼斯小城·4居室</span>
        <div className='head-icon'>
          <span className='houselist' onClick={() => {navigate('/home/houselist')}}><CalendarOutlined /></span>
          <span className='collect' onClick={() => {navigate('/collect')}}><HeartOutlined /></span>
          <span className='share'><ShareAltOutlined /></span>
        </div>
      </div>
      <div className='nav'>
        <div className='nav-img'>
          <div></div>
          <img src={cook} alt='' height={200} />                  
        </div>
        <div className='nav-content'>
          <div className='money'>
            <span className='price'>￥1290/月</span>
            <span className='text'>灵活签</span>
            <span className='try'>租金试算{'>'}</span>
          </div>
          <div className='discounts'>
            <span className='discounts-title'>夏日优惠</span>
            <span className='discounts-content'>领券签约最高立省660元</span>
          </div>
          <div className='nav-tag'>
            <Tag>短签&长签</Tag>
            <Tag color="cyan">深呼吸2.0</Tag>
            <Tag>免物业费</Tag>
            <Tag>独立阳台</Tag>
            <Tag>离地铁近</Tag>
          </div>
          <div className='area'>
            {
              area.map((item) => {
                return (
                  <div key={item.id}>
                    <div>{item.title}</div>
                    <div>{item.text}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
export default Detail