import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { useSelector } from 'react-redux';
import './index.css';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuList = [{
    label: <NavLink to="/home">首页</NavLink>,
    key: '/home'
  }, {
    label: <NavLink to="/about">关于</NavLink>,
    key: '/about'
  }]

  let [currentTab, setCurrentTab] = useState('/home');

  const updateMenu = (e) => {
    setCurrentTab(e.key);
  }

  const logout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login');
  }

  const username = useSelector(state => state.user.username) || 'Undefined'

  useEffect(() => {
    setCurrentTab(pathname);
  }, [pathname])

  return (
    <div className="header"> 
      <div className="top-container">
        欢迎，{username}
        <Button type="link" onClick={logout}>退出</Button>
      </div>
      <Menu selectedKeys={currentTab} items={menuList} mode="horizontal" onClick={updateMenu}></Menu>
    </div> 
  )
}
