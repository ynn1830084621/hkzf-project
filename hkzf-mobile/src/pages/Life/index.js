import React from 'react';
import { Avatar, Comment } from 'antd';
import { HeartTwoTone, MessageOutlined, UserOutlined } from '@ant-design/icons';
import './index.scss'
import museum from '../../assets/images/museum.png'
import home from '../../assets/images/home.png'
import smile from '../../assets/images/smile.png'

function Life() {
  const themes = [
    {id: 1, title: '租客福利', text: '#60份B站会...'},
    {id: 2, title: '生活瞬间', text: '#毕业租房必需...'},
    {id: 3, title: '城市玩乐', text: '#建筑历史之旅...'}
  ]
  const serves = [
    {id: 1, tip: '夏日福利', title: '仪式感这点事儿', img: smile, content: 'B站会员卡免费领取！优质内容还有机会获得50福利点~', button: '立即参与'},
    {id: 2, tip: '生活瞬间>', title: '#晒晒我的家', img: home, content: '晒晒你的温馨小家，优质晒家可获得50福利点~', button: '晒晒家'},
    {id: 3, tip: '周末去哪玩>', title: '逛逛建筑博物馆', img: museum, content: '打卡近代建筑博物馆，体验历史之旅！优质打卡可获得50福利点~', button: '去看看>'}
  ]
  return (
    <div className='life'>
      <div className='head'>
        <div className='text'>
          <div className='headline'>好客社区</div>
          <div>和500万租客发现生活</div>
        </div>
        <div className='icon'>
          <div className='news'><MessageOutlined style={{ color: '#08c' }} /></div>
          <div className='avatar'><Avatar icon={<UserOutlined />} /></div>
        </div>
      </div>
      <div className='nav'>
        <div className='comment'>
          <div className='people'>1056位租客</div>
          <div className='title'>
            “想恋爱<HeartTwoTone twoToneColor="#eb2f96" />”
          </div>
          <div className='content'>
            <Comment
              author={<div>Queenie</div>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Queenie" />}
              content={
                <p className='text'>
                  还是希望能遇到可以相敬如宾的人,一起走人生的旅程
                </p>
              }
            />
          </div>
        </div>
        <div className='theme'>
          {
            themes.map((item) => {
              return (
                <div className='theme-item' key={item.id}>
                  <div className='title'>{item.title}</div>
                  <div className='text'>{item.text}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='community'>
        <div className='serve'>
        {
          serves.map((item) => {
            return (
              <div className='serve-item' key={item.id}>
                <div className='tip'>{item.tip}</div>
                <div className='title'>{item.title}</div>
                <img className='img' src={item.img} alt=''/>
                <div className='start'>
                  <div className='content'>{item.content}</div>
                  <button>{item.button}</button>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
export default Life;
