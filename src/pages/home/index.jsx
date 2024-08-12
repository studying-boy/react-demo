import React from 'react'
import './index.css'
import TodoInput from '../../components/todoInput'
import TodoList from '../../components/todoList'

export default function Home() {
  return (
    <div className='home-container'>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  )
}
