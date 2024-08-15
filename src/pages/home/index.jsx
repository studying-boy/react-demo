import React from 'react'
import './index.css'
import TodoInput from '../../components/todoInput'
import TodoList from '../../components/todoList'
import { useSelector } from 'react-redux';


export default function Home() {
  const todoList = useSelector(state => state.todo.list);
  return (
    <div className='home-container'>
      <TodoInput></TodoInput>
      <TodoList todoList={todoList}></TodoList>
    </div>
  )
}
