import React from 'react';
import { HeartOutlined, HeartTwoTone, EnvironmentOutlined } from '@ant-design/icons'
import { Divider, Card, Tag } from 'antd';
import './index.scss'
import house1 from '../../assets/images/houses/house1.png'
import house2 from '../../assets/images/houses/house2.png'
import house3 from '../../assets/images/houses/house3.png'
import house4 from '../../assets/images/houses/house4.png'
import house5 from '../../assets/images/houses/house5.png'
import house6 from '../../assets/images/houses/house6.png'
import { changeFlag} from '../../reducer/citySlice'
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


function HouseList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { housesList } = useSelector(state => state.citys)
  const houses = [
    {id: 1, img: house1, size: '合租 4居室 18m^2'  },
    {id: 2, img: house2, size: '合租 4居室 16m^2'  },
    {id: 3, img: house3, size: '合租 4居室 14.3m^2'  },
    {id: 4, img: house4, size: '合租 4居室 18.7m^2'  },
    {id: 5, img: house5, size: '合租 5居室 16m^2'  },
    {id: 6, img: house6, size: '合租 4居室 14.9m^2'  },
  ]

  console.log('3113131')

  return (
    <div className='houselist'>
      <div className='head'>
        <div className='head-title'>看房单</div>
        <div className='head-icon' onClick={() => {navigate('/collect')}}><HeartTwoTone /></div>
      </div>
      <div className='see'>共0个待看房源</div>
      <div className='nav'>
        <div className='nav-text'>
          <div className='nav-title'>找管家帮我选房</div>
          <div className='nav-content'>你还没有看房单，快去创建一个吧</div>
        </div>
        <button 
          className='nav-button'
          onClick={() => navigate('/search')}
        >
          创建看房单
        </button>
      </div>
      <div className='divider'>
        <Divider plain>以下房源值得看看</Divider>
      </div>
      <div className='content'>
        <button className='content-button'>上新</button>
        <div className='house'>
          <div className='news'>
            {
              houses.map((item, index) => {
                return (
                  <div 
                    className='house-item' 
                    key={item.id} 
                    onClick={() => {
                      navigate(`/detail?id=${item.id}`)
                    }} 
                  >                 
                    <div className='img'>
                      <Card
                        style={{height: 120, width: '100%'}}
                        cover={<img alt="example" src={item.img} />}
                      >
                      </Card>   
                      <div className='address'>
                        <span><EnvironmentOutlined /></span>
                        {housesList[index].address}
                      </div>
                      <div 
                        className='img-icon' 
                        onClick={(e) => {
                          //console.log(e,'eeee');
                          dispatch(changeFlag(housesList[index]))
                          e.stopPropagation()
                          ;
                        }}
                      >
                        {housesList[index].flag ? <HeartTwoTone  twoToneColor="#eb2f19" /> : <HeartOutlined /> }
                      </div>
                    </div>
                    <div className='price'>{housesList[index].price}</div>
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