import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Login() {
  const navigate = useNavigate();
  let [form] = Form.useForm();
  const [ messageApi, contextHolder ] = message.useMessage();

  const submit = (values) => {
    const { username, password } = values;
    if(username === password) {
      messageApi.success('登录成功')
      localStorage.setItem('isLogin', true);
      navigate('/home');
    } else {
      messageApi.error('用户名或者密码错误')
    }
  }

  return (
    <div className="login-box">
      { contextHolder }
      <h3 style={{textAlign: 'center'}}>登录页</h3>
      <Form
        labelCol={{ span: 3 }}
        form={form}
        onFinish={submit}
      >
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input type="password"></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <Button htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
