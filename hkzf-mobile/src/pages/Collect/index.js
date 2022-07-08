import React from 'react';
import { ArrowLeftOutlined, EnvironmentOutlined, SwapOutlined } from '@ant-design/icons'
import './index.scss'

function Collect() {
    return (
        <div className='collect'>
            <div className='head'>
                <div className='back'><ArrowLeftOutlined /></div>
                <div className='house-type'>
                    <span className='sum'>房源</span>
                    <span className='house1'>小区</span>
                    <span className='house2'>公寓</span>
                </div>
                <div className='map'><EnvironmentOutlined /></div>
            </div>
            <div className='nav'>
                <div className='contrast'>
                    <span className='heart'>收藏</span>
                    <span className='vehicle'>通勤对比</span>
                    <span className='house'>户型对比</span>
                </div>
                <div className='sort'>
                    <span><SwapOutlined rotate={90}/></span>
                    <span>默认排序</span>
                </div>
            </div>
            <div className='content'>收藏房源</div>
        </div>
    )
}
export default Collect