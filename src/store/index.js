import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer
  }
})

export default store;