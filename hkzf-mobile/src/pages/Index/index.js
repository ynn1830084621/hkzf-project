import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Carousel, List, Row, Col } from 'antd';
//import { HomeOutlined, TeamOutlined, EnvironmentOutlined, TransactionOutlined } from '@ant-design/icons';
import axios from 'axios';
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
import { CaretDownOutlined, SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './index.scss'

const contentStyle = {
  dispaly: 'inline-block',
  width: '100%', 
  height: 212
};

//导航菜单数据
const navs = [
  {id: 1, img: Nav1, title: '整租', path: '/home/houselist'},
  {id: 2, img: Nav2, title: '合租', path: '/houselist'},
  {id: 3, img: Nav3, title: '地图找房', path: '/map'},
  {id: 4, img: Nav4, title: '出租房', path: '/home/houselist'},
]

function Index() {
  const navigate = useNavigate()
  //轮播图状态数据
  const [swipers, getSwipers] = useState([])
  //住房小组数据
  const [groups, getGroups] = useState([])
  //最新资讯数据
  const [news, getNews] = useState([])

  //获取地理位置
  navigator.geolocation.getCurrentPosition(position => {
    console.log('当前地理位置', position);
  })
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
  //获取租房小组数据
  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get('http://localhost:8080/home/groups', {params:{area: 'AREA%7C88cff55c-aaa4-e2e0'}})
      .then(
        (res) => {
          return res.data.body
        }
      )
      //console.log('获取租房小组数据', res);
      getGroups(res)
    }
    fetchDate()
  }, [])
  //获取最新资讯的数据
  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get('http://localhost:8080/home/news',{params:{area: 'AREA%7C88cff55c-aaa4-e2e0'}})
      .then((res) => {
        return res.data.body
      })
      //console.log('最新资讯数据', res);
      getNews(res)
    }
    fetchDate()
  }, [])
  return(
    <div className='homeIndex'>
      <div className='swiper'>
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
        <div className='search-area'>
          <div className='search-city'>
            <div className='city-name' onClick={() => {navigate('/cityList')}}>
              <span>上海</span>
              <span style={{ paddingLeft: '2px' }}><CaretDownOutlined /></span>
            </div>
            <div className='cut'>|</div>
            <div className='city-input' onClick={() => {navigate('/search')}}>
              <span style={{ paddingRight: '5px' }}><SearchOutlined /></span>
              <span>请输入小区或地址</span>
            </div>
          </div>
          <div className='search-map' onClick={() => {navigate('/map')}}><EnvironmentOutlined /></div>
        </div>
      </div>
      <div className='nav'>
        {
            navs.map((item) => {
              return(
                <div className='img-item' key={item.id}>
                  <div className='img'  onClick={() => navigate(item.path)}>
                    <img src={item.img} alt='整租' width={50} />
                  </div>
                  <div className='text'>{item.title}</div>
                </div>
              )
            })
          }
      </div>
      <div className='group'>
        <div className='group-title'>
          租房小组 <span className='more'>更多</span>
        </div>
      <div className='card'>
          {
            groups.map((item) => {
              return (
                <div className='card-item' key={item.id}>
                  <div className='data'>
                    <div className='title'>{item.title}</div>
                    <div className='desc'>{item.desc}</div>
                  </div>
                  <div className='img'>
                    <img src={`http://localhost:8080${item.imgSrc}`} alt='' width={60}/>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </div>
      <div className='news'>
        <List
          itemLayout="vertical"
          size="large"
          header={<div className='news-title'>最新资讯</div>}
          dataSource={news}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Row>
                <Col span={12}>
                  <img src={`http://localhost:8080${item.imgSrc}`} alt="" width={130}/>
                </Col>
                <Col span={12}>
                  <div className='title'>{item.title}</div>
                  <span className='from'>{item.from}</span>
                  <span className='date'>{item.date}</span>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      
      </div>
    </div>
  )

};

export default Index