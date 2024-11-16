import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [{
    id: 0,
    checked: false,
    text: '第一条写死的数据'
  }, {
    id: 1,
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
        id: state.list.length,
        checked: false,
        text: action.payload
      });
    },
    removeData: (state, action) => {
      const index = state.list.findIndex((item => item.id == action.payload));
      state.list.splice(index, 1);
    },
    updateData: (state, action) => {
      const index = state.list.findIndex((item => item.id == action.payload))
      state.list[index].checked = !state.list[index].checked;
    },
  }
})

export const { addData, removeData, updateData } = todoSlice.actions;
export default todoSlice.reducer;