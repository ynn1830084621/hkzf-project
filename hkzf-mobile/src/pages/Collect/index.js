import React from 'react';
import { ArrowLeftOutlined, EnvironmentOutlined, SwapOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { EllipsisOutlined } from '@ant-design/icons'
import './index.scss'
import house1 from '../../assets/images/houses/house1.png'
import house2 from '../../assets/images/houses/house2.png'
import house3 from '../../assets/images/houses/house3.png'
import house4 from '../../assets/images/houses/house4.png'
import house5 from '../../assets/images/houses/house5.png'
import house6 from '../../assets/images/houses/house6.png'

const houses = [
    {id: 1, img: house1, size: '合租 4居室 18m^2'  },
    {id: 2, img: house2, size: '合租 4居室 16m^2'  },
    {id: 3, img: house3, size: '合租 4居室 14.3m^2'  },
    {id: 4, img: house4, size: '合租 4居室 18.7m^2'  },
    {id: 5, img: house5, size: '合租 5居室 16m^2'  },
    {id: 6, img: house6, size: '合租 4居室 14.9m^2'  },
]
function Collect() {
  const navigate = useNavigate()
  const { housesList } = useSelector(state => state.citys)
  return (
    <div className='collect'>
      <div className='head'>
        <div className='back' onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
        </div>
        <div className='house-type'>
          <span className='sum'>房源</span>
          <span className='house1'>小区</span>
          <span className='house2'>公寓</span>
        </div>
        <div className='map'><EnvironmentOutlined /></div>
      </div>
      <div className='nav'>
        <div className='contrast'>
          <span className='heart'>收藏</span>
          <span className='vehicle'>通勤对比</span>
          <span className='house'>户型对比</span>
        </div>
        <div className='sort'>
          <span><SwapOutlined rotate={90}/></span>
          <span>默认排序</span>
        </div>
      </div>
      <div className='content'>
        {
          houses.map((item, index) => {
            if(housesList[index].flag === true) {
              return (
                <div 
                  className='collect-item' 
                  key={item.id} 
                  onClick={() => {
                    navigate(`/detail/${item.id}`)
                  }} 
                >
                  <div className='collect-title'>
                    <div className='house-address'>{housesList[index].address}</div>
                    <div className='house-price'>{housesList[index].price}</div>
                  </div>
                  <div className='collect-content'>
                    <div className='house-img'>
                      <img src={item.img} alt='' height={100} /> 
                    </div>
                    <div className='house-news'>
                      <div>{item.size}</div>
                      <div>房源距泰冯路站步行约381米</div>
                    </div>
                  </div>
                  <span className='more'>
                    <EllipsisOutlined />
                  </span>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}
export default Collect