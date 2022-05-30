import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined, ContainerOutlined, UserOutlined } from '@ant-design/icons';

const items = [
    {
        label: '首页',
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: '找房',
        key: 'house',
        icon: <SearchOutlined />,
    },
    {
        label: '资讯',
        key: 'news',
        icon: <ContainerOutlined />,
    },
    {
        label: '我的',
        key: 'Mine',
        icon: <UserOutlined />,
    },
];
function Home() {
    const [selectable, setSelectable] = useState('首页')
    const [hover, setHover] = useState(false)
    const [fullSceen, setFullSceen] = useState()
    const FullSceen = () => {
        setFullSceen({
            fullScern: this.fullSceen ? {position:'fixed', height:'100%', width:'100%', top:0} : {height: 400}
        })
    }
    return ( 
        <div>
            <Outlet/>
            <Menu
                selectable={FullSceen}
                triggerSubMenuAction={hover}
                mode="horizontal" 
                items={items} 
            />;
        </div> 
    );
}

export default Home;