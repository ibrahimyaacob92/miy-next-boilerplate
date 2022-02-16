import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import initialState from './todo.initialState';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // add your reducers function here
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {},
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
