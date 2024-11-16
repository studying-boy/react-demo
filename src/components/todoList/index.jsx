import React, { useEffect, useState } from 'react'
import { Checkbox, Button } from 'antd';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateData, removeData } from '../../store/todoSlice';

export default function TodoList(props) {
  const { todoList } = props;
  const [ todoListShow, updateTodoListShow ] = useState(todoList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isFilterFinally);
    updateTodoListShow(isFilterFinally ? todoList.filter(item => !item.checked) : todoList);
  }, [todoList])

  const [isFilterFinally, setIsFilterFinally] = useState(false);

  const changeCheckbox = (index) => {
    dispatch(updateData(index));
  }

  const deleteItem = (index) => {
    dispatch(removeData(index))
  }

  const editItem = (index) => {
    navigate(`/about?num=${index}`);
  }

  const changeFilter = () => {
    const currentRealResult = !isFilterFinally; // 当前真正的值
    setIsFilterFinally(currentRealResult);
    updateTodoListShow(currentRealResult ? todoList.filter(item => !item.checked) : todoList);
  }

  return (
    <div className='todoList-container'>
      {todoListShow.map((data) => {
        return <div key={data.id} className='item'>
          <Checkbox checked={data.checked} onChange={() => changeCheckbox(data.id)}></Checkbox>
          <span className={data.checked ? 'text isChecked' : 'text'}>{data.text}</span>
          <Button type="link" onClick={() => editItem(data.id)}>编辑</Button>
          <Button type="link" onClick={() => deleteItem(data.id)}>删除</Button>
        </div>
      })}
      <div style={{ marginTop: '20px' }}>
        <Checkbox checked={isFilterFinally} onChange={changeFilter}></Checkbox> 过滤已完成项
      </div>
    </div>
  )
}
