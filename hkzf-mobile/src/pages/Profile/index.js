import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { NodeIndexOutlined, LogoutOutlined, HeartOutlined, HeartTwoTone, TeamOutlined, FileProtectOutlined, EyeOutlined,
  FileTextOutlined, AccountBookOutlined, StarOutlined, WalletOutlined} from '@ant-design/icons'
import { Modal, Tag } from 'antd';
import { useSelector } from 'react-redux';
import './index.scss'
import cat from'../../assets/images/cat.png'
import img1 from '../../assets/images/clean.png'
import img2 from '../../assets/images/gift.png'
import img3 from '../../assets/images/move-house.png'
import img4 from '../../assets/images/gift.png'
import service from '../../assets/images/customer-service.png'

  const deals = [
    {id: 1, icon: <FileTextOutlined />, text: '合同'},
    {id: 2, icon: <AccountBookOutlined />, text: '账单'},
    {id: 3, icon: <FileProtectOutlined />, text: '订单'},
    {id: 4, icon: <StarOutlined />, text: '评价'},
    {id: 5, icon: <WalletOutlined />, text: '钱包'},
  ]
  const serves = [
    {id: 1, img: img1, title: '品质保洁', text: '家务自由即刻拥有 >'},
    {id: 2, img: img2, title: '空调清洗', text: '限时活动低至79/台 >'},
    {id: 3, img: img3, title: '省心搬家', text: '全程搬运,限时61元起 >'},
    {id: 4, img: img4, title: '超值会员店', text: '抢秒杀,屯好货 >'}
  ]
function Profile() {
  const navigate = useNavigate()
  const { housesList } = useSelector(state => state.citys)
  const getCount = () => (
    housesList.filter((item) => {
      return item.flag
    })
  )
  console.log(getCount().length, 'count');
  const navs = [
    {id: 1, icon: <HeartOutlined />, icon2: <HeartTwoTone  twoToneColor="#eb2f19" />, text: '收藏', count: getCount().length},
    {id: 2, icon: <EyeOutlined />, text: '足迹'},
    {id: 3, icon: <FileProtectOutlined />, text: '约看'},
    {id: 4, icon: <TeamOutlined />, text: '合租'},
  ]
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/?action=logout')
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className='profile'>
      <div className='header'>
        <div className='change'>
          <div className='change-text' onClick={() => {navigate('/change')}}>
            切换到业主版 <span className='change-icon'><NodeIndexOutlined /></span>
          </div>
        </div>
        <div 
          className='icon' 
          onClick={showModal}
        >
          <LogoutOutlined rotate={270}/>
        </div>
      </div>
      <div className='introduce'>
        <div className='img'><img src={cat} alt='' width={52}/></div>
        <div className='content'>
          <div className='title'>Hi, 好客租房...</div>
          <div className='text'>今天也是元气满满的一天!</div>
        </div>
      </div>
      <div className='profile-nav'>
          {
            navs.map((item,index) => {
              return (
                <div 
                  key={item.id}
                  className='nav-item' 
                  onClick={() => {
                    console.log(index,'0000');
                    if(index === 0) {
                      navigate('/collect')
                      console.log('111');
                    }
                  }}
                >
                  <span className='icon'>
                    {item.count > 0 ? item.icon2 : item.icon }
                  </span>
                  <span className='text'>
                    {item.text}
                    {item.count > 0  ? `(${item.count})` : ''}
                  </span>
                </div>
              )
            })
        }
      </div>
      <div className='deal'>
        <div className='title'>期待您选择好客租房</div>
        <div className='deals'>
        {
          deals.map((item) => {
            return (
              <div className='deal-item' key={item.id}>
                <div className='icon'>
                  {item.icon}
                </div>
                <div className='text'>{item.text}</div>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='serve'>
        <div className='serve-title'>
          <div className='name'>好客家服 </div>
          <div className='more'>了解更多{'>'}</div>
        </div>
        <div className='introduce'>您的家庭生活专家，已开放全民体验</div>
        <div className='content'>
          {
            serves.map((item) => {
              return (
                <div className='serve-item' key={item.id}>
                  <div className='content'>
                    <div className='img'><img src={item.img} alt='' width={45}/></div>
                    <div className='title'>{item.title}</div>
                  </div>
                  <div className='text'>{item.text}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='help'>
        <div className='head'>
          <img src={service} alt='' width={50} />
          <div className='text'>
            <div className='title'>我的客服服务</div>
            <div className='introduce'>7*24小时为您守候</div>
          </div>
          <div className='more'>咨询更多问题{'>'}</div>  
          <div className='tag'>
            <Tag>如何预约搬家</Tag>
            <Tag>短租含义与签约规则</Tag>
            <Tag>签约步骤</Tag>
            <Tag>好客服务承诺</Tag>
            <Tag>企悦会介绍</Tag>
          </div>
        </div>
      </div>
      <Modal 
        title="注销" 
        okText="确定" 
        cancelText="取消" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
        <div>是否退出当前账户</div>
      </Modal>
    </div>
  )
}
export default Profile