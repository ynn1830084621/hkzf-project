import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox , Form, Input, message } from 'antd';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './index.scss'

function Login() {
  const navigate = useNavigate();
  const { userList } = useSelector(state => state.citys)
  //提交表单且数据验证成功后回调事件
  const onFinish = (values) => {
    const userArr = userList.filter(item => { // 筛选用户得出的用户数据
      return item.name === values.username
    })
    console.log(userArr[0].password, +values.password);
    if (userArr.length === 0) {
      message.error('用户不存在');
    } else if (userArr[0].password === +values.password) {
      message.success('登录成功')
      navigate('/home')
    } else {
      message.error('密码错误');
    }
  };
  return (
    <div className='login'>
      <div className='login-title'>您好,</div>
      <div className='login-welcome'>欢迎来到好客租房~</div>
      <div className='login-content'>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input 
              className='login-input'
              bordered={false}
              size='large'
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password 
              className='login-input'
              type="password"
              bordered={false}
              size='large'
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item >
            <Button 
              className="login-form-button" 
              size='large'
              htmlType="submit" 
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login