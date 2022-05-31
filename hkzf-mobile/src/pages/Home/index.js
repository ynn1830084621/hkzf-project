import React, { useState } from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined, ContainerOutlined, UserOutlined } from '@ant-design/icons';
import './index.css'
const items = [
    {
        label: '首页',
        key: 'home',
        icon: <HomeOutlined />,
        path: '/index',
    },
    {
        label: '找房',
        key: 'houselist',
        icon: <SearchOutlined />,
        path: '/houselist'
    },
    {
        label: '资讯',
        key: 'news',
        icon: <ContainerOutlined />,
        path: '/news',
    },
    {
        label: '我的',
        key: 'profile',
        icon: <UserOutlined />,
        path: '/profile'
    },
];
function Home() {
    const [current, setCurrent] = useState('home'); //默认选中菜单项
    const navigate = useNavigate()
    const handleClick = e => {
        // console.log('click ', e);
        setCurrent(e.key);
        if (e.key === 'home') {
            navigate('/home/index')
        }else if(e.key === 'houselist') {
            navigate('/home/houselist') 
        }else if(e.key === 'news') {
            navigate('/home/news') 
        }else {
            navigate('/home/profile')
        }
    };
    return ( 
        <div>
            <Outlet/>
            <div className='home'>
                <Menu
                    selectedKeys={[current]}
                    onClick={handleClick}
                    mode="horizontal" 
                    items={items} 
                />
            </div>
        </div> 
    );
}

export default Home;