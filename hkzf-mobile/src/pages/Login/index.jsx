import React from 'react';
import { Button, Checkbox , Form, Input, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './index.scss'
import { getName } from '../../reducer/citySlice';

function Login() {
  const navigate = useNavigate();
  const { userList } = useSelector(state => state.citys)
  const dispatch = useDispatch()
  //获取浏览器路径（URL）中指定名字的 query 参数的值
  const parmaId = name => {
    // console.log(new URL(window.location.href), new URL(window.location.href).searchParams )
    return new URL(window.location.href).searchParams.get(name)
  }
  console.log(parmaId('action'))
  
  //提交表单且数据验证成功后回调事件
  const onFinish = (values) => {
    const userArr = userList.filter(item => { // 筛选用户得出的用户数据
      return item.name === values.username
    })
    console.log(userArr[0].password, +values.password);
    console.log(values);
    if (userArr.length === 0) {
      message.error('用户不存在');
    } else if (userArr[0].password === +values.password) {
      if (values.remember) {
        localStorage.setItem('username', values.username)
        localStorage.setItem('password', values.password)
        localStorage.setItem('remember', values.remember)
      }
      message.success('登录成功')
      dispatch(getName(userArr[0]))
      navigate('/home/index')
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
          initialValues={
            parmaId('action') === 'logout' ? { remember: false } :
            { 
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password'), 
            remember: localStorage.getItem('remember') 
          }
        }
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
            <Checkbox >
              记住密码
            </Checkbox>
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