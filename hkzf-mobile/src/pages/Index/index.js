import React, { useState, useEffect } from 'react';
import { Carousel, Breadcrumb } from 'antd';
//import { HomeOutlined, TeamOutlined, EnvironmentOutlined, TransactionOutlined } from '@ant-design/icons';
import axios from 'axios';
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
import './index.css'

const contentStyle = {
  dispaly: 'inline-block',
  width: '100%', 
  height: 212
};

//导航菜单数据
const navs = [
  {id: 1, img: Nav1, title: '整租', path: '/home/list'},
  {id: 2, img: Nav2, title: '合租', path: '/home/list'},
  {id: 3, img: Nav3, title: '地图找房', path: '/home/map'},
  {id: 4, img: Nav4, title: '去出租', path: '/home/list'},
]

function Index() {
  const [swipers, getSwipers] = useState([])
  //获取轮播图数据
  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get('http://localhost:8080/home/swiper').then(
        (res) => {
          return res.data.body
        }    
      )
      //console.log('获取轮播图数据', res)
      getSwipers(res)
    }
    fetchDate()
  },[])
  return(
    <div>
      <div>
        <Carousel autoplay>
          { swipers.map( item => {
            //console.log('item',item);
            return (
              <a key={item.id} href='http://itcat.cn' style={contentStyle}>
                <img 
                  src={`http://localhost:8080${item.imgSrc}`} 
                  alt=''
                  style={{width: '100%', verticalAlign: 'top'}}
                />
              </a>
            )
          })}
        </Carousel>
      </div>
      <div className='nav'>
        <Breadcrumb separator="">
          {
            navs.map((item) => {
              return (
                <Breadcrumb.Item key={item.id}>
                  <img src={item.img} alt='整租' />
                  <h2>{item.title}</h2>
                </Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </div>
    </div>
  )

};

export default Index