import React from 'react'
import { Checkbox, Button } from 'antd';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateData, removeData } from '../../store/todoSlice';

export default function TodoList(props) {
  const { todoList } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeCheckbox = (index) => {
    dispatch(updateData(index))
  }

  const deleteItem = (index) => {
    dispatch(removeData(index))
  }

  const editItem = (index) => {
    navigate(`/about?num=${index}`);
  }

  return (
    <div className='todoList-container'>
      {todoList.map((data, index) => {
        return <div key={data.text + index} className='item'>
          <Checkbox checked={data.checked} onChange={() => changeCheckbox(index)}></Checkbox>
          <span className={data.checked ? 'text isChecked' : 'text'}>{data.text}</span>
          <Button type="link" onClick={() => editItem(index)}>编辑</Button>
          <Button type="link" onClick={() => deleteItem(index)}>删除</Button>
        </div>
      })}
    </div>
  )
}
