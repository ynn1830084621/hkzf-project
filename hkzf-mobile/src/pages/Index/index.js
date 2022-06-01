import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';

const contentStyle = {
    dispaly: 'inline-block',
    width: '100%', 
    height: 212
};

function Index() {
    const [swipers, getSwipers] = useState([])
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
    return(
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
    )

};

export default Index