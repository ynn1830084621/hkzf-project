import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Index() {
    const [swipers, getSwipers] = useState([])
    useEffect(() => {
        const fetchDate = async () => {
            const res = await axios.get('http://localhost:8080/home/swiper')
            console.log('获取轮播图数据', res); 
        }
        fetchDate()
    })
    return(
        <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )

};

export default Index