import React, { useRef, useState } from 'react'
import { Input, Button } from 'antd'
import { addData } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'
import './index.css'

export default function TodoInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const submit = () => {
    dispatch(addData(inputValue));
    setInputValue('');
  }

  return (
    <div className='todoInput-container'>
      <Input className='myInput' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></Input>
      <Button onClick={submit} disabled={!inputValue}>提交</Button>
    </div>
  )
}
