import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Button } from 'antd';
import { updateData, removeData } from '../../store/todoSlice';
import './index.scss';

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo.list);

  const changeCheckbox = (index) => {
    dispatch(updateData(index))
  }

  const deleteItem = (index) => {
    dispatch(removeData(index))
  }

  return (
    <div className='todoList-container'>
      {todoList.map((data, index) => {
        return <div key={data.text + index} className='item'>
          <Checkbox checked={data.checked} onChange={() => changeCheckbox(index)}></Checkbox>
          <span className={data.checked ? 'text isChecked' : 'text'}>{data.text}</span>
          <Button type="link" onClick={() => deleteItem(index)}>删除</Button>
        </div>
      })}
    </div>
  )
}
