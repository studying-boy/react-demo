import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [{
    checked: false,
    text: '第一条写死的数据'
  }, {
    checked: true,
    text: '第二条写死的数据'
  }]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.list.push({
        checked: false,
        text: action.payload
      });
    },
    removeData: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    updateData: (state, action) => {
      console.log(action);
      state.list[action.payload].checked = !state.list[action.payload].checked;
    },
  }
})

export const { addData, removeData, updateData } = todoSlice.actions;
export default todoSlice.reducer;