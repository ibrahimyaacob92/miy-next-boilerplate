import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import initialState from './user.initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: ({ preference }) => {
      preference.theme = preference.theme === 'light' ? 'dark' : 'light';
    },

    addCounter: () => {},
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {},
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
