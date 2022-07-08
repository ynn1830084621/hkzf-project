import React from 'react';
import { SmileOutlined, HeartOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Divider, Card, Tag } from 'antd';
import './index.scss'
import house1 from '../../assets/images/houses/house1.png'
import house2 from '../../assets/images/houses/house2.png'
import house3 from '../../assets/images/houses/house3.png'
import house4 from '../../assets/images/houses/house4.png'
import house5 from '../../assets/images/houses/house5.png'
import house6 from '../../assets/images/houses/house6.png'
import { useNavigate } from 'react-router-dom';


function HouseList() {
  const houses = [
    {id: 1, img: house1, address: '桥北·威尼斯水城', price: '￥1339/月', size: '合租 4居室 18m^2'  },
    {id: 2, img: house2, address: '泰山街道·荣盛景秀澜山', price: '￥1160/月', size: '合租 4居室 16m^2'  },
    {id: 3, img: house3, address: '桥北·江岸水城', price: '￥990/月', size: '合租 4居室 14.3m^2'  },
    {id: 4, img: house4, address: '百家湖·湖滨世纪花园', price: '￥1590/月', size: '合租 4居室 18.7m^2'  },
    {id: 5, img: house5, address: '岔路口·南方花园B组团', price: '￥1430/月', size: '合租 5居室 16m^2'  },
    {id: 6, img: house6, address: '高新区·高新花苑', price: '￥990/月', size: '合租 4居室 14.9m^2'  },
  ]
  const navigate = useNavigate()
  return (
    <div className='houselist'>
      <div className='head'>
        <div className='head-title'>看房单</div>
        <div className='head-icon' onClick={() => {navigate('/collect')}}><SmileOutlined /></div>
      </div>
      <div className='see'>共0个待看房源</div>
      <div className='nav'>
        <div className='nav-text'>
          <div className='nav-title'>找管家帮我选房</div>
          <div className='nav-content'>你还没有看房单，快去创建一个吧</div>
        </div>
        <button className='nav-button'>创建看房单</button>
      </div>
      <div className='divider'>
        <Divider plain>以下房源值得看看</Divider>
      </div>
      <div className='content'>
        <button className='content-button'>上新</button>
        <div className='house'>
          <div className='news'>
            {
              houses.map((item) => {
                return (
                  <div className='house-item' key={item.id} onClick={() => {navigate('/detail')}} >                 
                    <div className='img'>
                      <Card
                        style={{height: 120, width: '100%'}}
                        cover={<img alt="example" src={item.img} />}
                      >
                      </Card>   
                      <div className='address'>
                        <span><EnvironmentOutlined /></span>
                        {item.address}
                      </div>
                      <div className='img-icon'>
                        <HeartOutlined />
                      </div>
                    </div>
                    <div className='price'>{item.price}</div>
                    <div className='size'>{item.size}</div>
                    <div className='tag'>
                      <Tag color="success">新上</Tag>
                      <Tag color="warning">友家6.0</Tag>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default HouseList