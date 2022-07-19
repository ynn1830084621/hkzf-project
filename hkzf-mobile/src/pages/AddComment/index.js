import React from 'react';
import { Button, Form, Radio, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons'
import './index.scss'
import TextArea from 'antd/lib/input/TextArea';
import { addComment } from '../../reducer/citySlice';

function AddComment() {
  const { commentName, commentList } = useSelector(state => state.citys)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = (values) => {
    if( values.title && values.comment) {
      console.log(values.title, values.comment);
      dispatch(
        addComment({
          id: nanoid(),
          number: commentList[commentList.length-1].number + 1,
          title: values.title,
          author: commentName.name,
          comment: values.comment
        })
      )
      console.log( commentName.name, 'name');
      console.log( commentList[commentList.length-1].number + 1, 'number');
      navigate('/home/life')
      message.success('发布成功')
    } else {
      message.error('没有输入内容');
    }
  }
  return (
    <div className='addComment'>
      <div className='back' onClick={() => navigate(-1)}><ArrowLeftOutlined /></div>
      <Form
        name="form-addcomment"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      > 
        <Form.Item name="title" label="帖子话题:">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="出闲置">出闲置</Radio.Button>
            <Radio.Button value="转租">转租</Radio.Button>
            <Radio.Button value="找室友">找室友</Radio.Button>
            <Radio.Button value="生活日常">生活日常</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="comment" label="内容:">
          <TextArea 
            placeholder="请发表你的看法~"
            rows={5}
          />
        </Form.Item>
        <Form.Item>
          <Button className='comment-button' htmlType="submit" type="primary" size='large'>
            发布
          </Button>
        </Form.Item> 
      </Form>
    </div>  
  )
}

export default AddComment