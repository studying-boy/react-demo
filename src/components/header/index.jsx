import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, Button } from 'antd';

export default function Header() {
  const navigate = useNavigate();

  const menuList = [{
    label: <NavLink to="/home">首页</NavLink>,
    key: 'home'
  }, {
    label: <NavLink to="/about">关于</NavLink>,
    key: 'about'
  }]

  let [currentTab, setCurrentTab] = useState('home');

  const updateMenu = (e) => {
    setCurrentTab(e.key);
  }

  const logout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login');
  }

  let userName = '1';

  return (
    <div className="header"> 
      <div className="top-container">
        欢迎，{userName}
        <Button type="link" onClick={logout}>退出</Button>
      </div>
      <Menu selectedKeys={currentTab} items={menuList} mode="horizontal" onClick={updateMenu}></Menu>
      <hr /> 
    </div> 
  )
}
