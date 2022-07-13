import React, { useState } from 'react';
import { ArrowLeftOutlined, CalendarOutlined, HeartOutlined, HeartTwoTone, ShareAltOutlined, MessageOutlined} from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { Carousel, Tag, Tabs, Collapse } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changeFlag } from '../../reducer/citySlice'
import './index.scss'
import bedroom  from '../../assets/images/house/bedroom.png'
import living  from '../../assets/images/house/living.png'
import cook  from '../../assets/images/house/cook.png'
import bathroom  from '../../assets/images/house/bathroom.png'
import community from '../../assets/images/community.png'


const { TabPane } = Tabs;
const { Panel } = Collapse;
const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};;
const imgs = [
  {id: '0', url: bedroom, title: '卧室' },
  {id: '1', url: living, title: '起居室' },
  {id: '2', url: cook, title: '厨房' },
  {id: '3', url: bathroom, title: '公共厕所' },
];
const area = [
  {id: 1, title: '面积', text: '14m^2'},
  {id: 2, title: '朝向', text: '朝南'},
  {id: 3, title: '户型', text: '4室1厅1卫'},
  {id: 4, title: '楼层', text: '7/11'},
];
const setting = [
  {id: 1, set: '电梯', text: '有'},
  {id: 2, set: '装修', text: '有家6.0木棉'},
  {id: 3, set: '门锁', text: '智能门锁'},
  {id: 4, set: '入住', text: '随时入住'},
  {id: 5, set: '租期', text: '可长租1年'},
];
const text = ` 房源位置 为您推荐这套位于运河明珠的房源。共有12栋楼。有24小时安保。该小区有1个出入口。人车均通过此门进出。小区里有健身广场，饮水站，快递柜，花园，生活氛围浓厚。楼下的健身广场，开放给小区居民使用。楼栋概况 小区建成于2008年，楼龄较新。房源所在楼栋共有7层。楼道内比较干净整洁，日常有专人负责清理打扫。单元口配备了门禁，提升了安全性。房源概况 房源位于第1层，在窗边可欣赏小区花园景色，增添一份推窗见景的小美好。房源整体朝南。厨房有阳台，方便储物。厨房里配备了国内外一线品牌的烟机灶具。卫生间配置齐全。南北通透，空气能有效流通。该房源有2间卧室，照顾到不同家庭成员的需求，打造舒适的居住空间。`;
function Detail(props) {
  const params = useParams();
  console.log(params, '1111')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { housesList } = useSelector(state => state.citys)
  const [ tabKey, setTabKey ] = useState();
  const getInfo = () => (
    housesList.filter((item) => {
      // console.log(item.id, +params.id, 'id');
      return item.id === +params.id
    })
  )
  console.log(getInfo()[0], '000');

  return (
    <div className='detail'>
      <div className='head'>
        <span className='back' onClick={() => navigate(-1)} >
          <ArrowLeftOutlined />
        </span>
        <span className='house'>{getInfo()[0].address}</span>
        <div className='head-icon'>
          <span className='houselist' onClick={() => {navigate('/home/houselist')}}><CalendarOutlined /></span>
          <span className='collect' onClick={() => {navigate('/collect')}}><HeartOutlined /></span>
          <span className='share'><ShareAltOutlined /></span>
        </div>
      </div>
      <div className='nav'>
        <div className='nav-img'>
          <Tabs
            defaultActiveKey="0"
            activeKey={tabKey}
          >
            {
              imgs.map((i) => (
                <TabPane tab={i.title} key={i.id}></TabPane>
              ))
            }
          </Tabs>
          <Carousel
            autoplay
            beforeChange={(from, to) => {
              setTabKey(to.toString())
            }}
          >
            {
              imgs.map(i => (
                <div key={i.id}>
                  <h3 style={contentStyle}><img src={i.url} alt='' height={200} width="100%" /></h3>
                </div>
              ))
            }
          </Carousel>               
        </div>
        <div className='nav-content'>
          <div className='money'>
            <span className='price'>{getInfo()[0].price}</span>
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
            <div className='size'>
              {
                area.map((item, index) => {
                  return (
                    <div className={index === 3 ? 'area-item-last' : 'area-item'} key={item.id}>
                      <div className='title'>{item.title}</div>
                      <div className='text'>{item.text}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='nav-setting'>
            {
              setting.map((i) => (
                <div className='setting-item' key={i.id}>
                  <span className='set'>{i.set}</span>
                  <span className='setting-text'>{i.text}</span>
                </div>
              ))
            }
            
          </div>
        </div>
        <div className='nav-text'>
            <div className='text-title'>房源概况</div>
            <div className='text-content'>
              <Collapse ghost >
                <Panel header="展示全部信息" showArrow={false}>
                  <div>{text}</div>
                </Panel>
              </Collapse>
            </div>
        </div>
      </div>
      <div className='introduce'>
        <div className='introduce-title'>
          <span className='title'>小区介绍 </span>
          <span className='more'>小区详情{'>'}</span>
        </div>
        <div className='introduce-img'>
          <div className='img'><img src={community} alt='' height={100} /></div>
          <div className='img-text'>
            <div className='img-title'>威尼斯小城</div>
            <div className='img-address'>浦口-泰山街道</div>
            <Tag color="green">1km内有两条地铁</Tag>
            <Tag color="green">楼龄较新</Tag>
          </div>  
        </div>
        <div className='introduce-content'>
          <Tag className='community'>
            <div>小区指数：7.5</div>
          </Tag>
          <Tag>
            <div>基本信息</div>
            <div>
              <span>建筑年代：2012-2013</span>
            </div>
            <div>
              <span>建筑类型：板楼</span>
            </div>
          </Tag>
          <Tag>
            <div>小区安全</div>
            <div>
              <span>是否封闭：是</span>
            </div>
            <div>
              <span>是否人车分流：否</span>
            </div>
          </Tag>
          <Tag>
            <div>居住环境</div>
            <div>
              <span>绿化率：41%</span>
            </div>
            <div>
              <span>容积率：1.6</span>
            </div>
          </Tag>
        </div>
      </div>
      <div className='detail-foot'>
        <div className='foot-collect'>
          <div 
            className='collect-icon' 
            // onClick={() => dispatch(addCount())}
            onClick={() => {
              console.log('11111')
              dispatch(changeFlag(getInfo()[0]))
            }}
          >
            {getInfo()[0].flag ? <HeartTwoTone  twoToneColor="#eb2f19" /> : <HeartOutlined /> }
          </div>
          <div>收藏</div>
        </div>
        <div className='foot-news'>
          <div className='news-icon'><MessageOutlined /></div>
          <div>咨询</div>
        </div>
        <button className='foot-sign'>立即签约</button>
        <button className='foot-see'>我要看房</button>
      </div>
    </div>
  )
}
export default Detail