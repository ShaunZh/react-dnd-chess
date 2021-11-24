/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-09-07 19:30:41
 * @LastEditors: Hexon
 * @LastEditTime: 2021-09-07 19:56:16
 */
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '@/pages/Posts/postSlice';

const store = configureStore({
  reducer: {
    posts: postReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;