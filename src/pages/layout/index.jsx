import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Header from '../../components/header';

export default function Home() {
  // 实例化路由
  const navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem('isLogin');
    if(!isLogin) {
      console.log('没有登陆，即将跳转登陆页');
      navigate('/login');
    }
  })
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <div className="footer"> 
        <hr /> 
        Footer 
      </div>
    </div>
  )
}
