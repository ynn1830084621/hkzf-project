import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import './index.css'
const items = [
    {
        label: '首页',
        key: 'home',
        icon: <HomeOutlined />,
        path: '',
    },
    {
        label: '找房',
        key: 'houselist',
        icon: <SearchOutlined />,
        path: '/houselist'
    },
    {
        label: '生活',
        key: 'life',
        icon: <SmileOutlined />,
        path: '/life',
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
        //console.log('click ', e);
        setCurrent(e.key);
        if (e.key === 'home') {
            navigate('/home')
        }else if(e.key === 'houselist') {
            navigate('/home/houselist') 
        }else if(e.key === 'life') {
            navigate('/home/life') 
        }else {
            navigate('/home/profile')
        }
    };
    const { pathname } = useLocation()
    useEffect(() => {
        if(pathname !== current ) {
            setCurrent(current)
        }
    }, [])
    return ( 
        <div style={{ height: '100vh', width: '100vw' }}>
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