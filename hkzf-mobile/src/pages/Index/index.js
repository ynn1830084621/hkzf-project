import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Carousel, Breadcrumb, Card, List, Row, Col, Avatar, Space } from 'antd';
//import { HomeOutlined, TeamOutlined, EnvironmentOutlined, TransactionOutlined } from '@ant-design/icons';
import axios from 'axios';
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
import './index.scss'

const contentStyle = {
  dispaly: 'inline-block',
  width: '100%', 
  height: 212
};

//导航菜单数据
const navs = [
  {id: 1, img: Nav1, title: '整租', path: '/home/houselist'},
  {id: 2, img: Nav2, title: '合租', path: '/home/houselist'},
  {id: 3, img: Nav3, title: '找房', path: '/home/map'},
  {id: 4, img: Nav4, title: '出租', path: '/home/houselist'},
]

function Index() {
  //轮播图状态数据
  const [swipers, getSwipers] = useState([])
  //住房小组数据
  const [groups, getGroups] = useState([])
  //最新资讯数据
  const [news, getNews] = useState([])

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
  },[])
  //获取最新资讯的数据
  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get('http://localhost:8080/home/news',{params:{area: 'AREA%7C88cff55c-aaa4-e2e0'}})
      .then((res) => {
        return res.data.body
      })
      console.log('最新资讯数据', res);
      getNews(res)
    }
    fetchDate()
  },[])
  const navigate = useNavigate()
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
                <Breadcrumb.Item key={item.id} onClick={() => navigate(item.path)}>
                  <img src={item.img} alt='整租' />
                  <h2>{item.title}</h2>
                </Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </div>
      <div className='group'>
        <h3 className='group-title'>
          租房小组 <span className='more'>更多</span>
        </h3>
      <Card className='card'>
          {
            groups.map((v, i) => {
              return (
                <Card.Grid 
                  style={{width: '50%',textAlign: 'center', height: '75px'}}
                  key={v.id}
                >
                  <div className='data'>
                    <p className='title'>{v.title}</p>
                    <span className='desc'>{v.desc}</span>
                  </div>
                  <img 
                    src={`http://localhost:8080${v.imgSrc}`}
                    alt=''
                  />
              </Card.Grid>
              )
            }
            )
          }
        </Card>
      </div>
      <div className='news'>
        <List
          itemLayout="vertical"
          size="large"
          header={<h3 className='news-title'>最新资讯</h3>}
          dataSource={news}
          renderItem={(item) => (
            <List.Item>
              <Row>
                <Col span={12}>
                  <img src={`http://localhost:8080${item.imgSrc}`} alt="" width={130}/>
                </Col>
                <Col span={12}>
                  <h5 className='title'>{item.title}</h5>
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