import React, { useState, useEffect } from 'react';
import { Carousel, Breadcrumb } from 'antd';
import { HomeOutlined, TeamOutlined, EnvironmentOutlined, KeyOutlined } from '@ant-design/icons';
import axios from 'axios';

const contentStyle = {
  dispaly: 'inline-block',
  width: '100%', 
  height: 212
};

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
      <div>
        <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <p>整租</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <TeamOutlined />
              <p>合租</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <EnvironmentOutlined />
              <p>地图找房</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <KeyOutlined />
              <p>出租</p>
            </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )

};

export default Index