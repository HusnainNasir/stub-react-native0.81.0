import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from './api';


export const loginApi = createAsyncThunk(
  'apiService/auth/loginApi',
  async payload => {
    const response = await apiService.api_v1_login(payload);
    return response.data;
  },
);


const initialState = {
  userData: {},
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginApi.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
  },
});

export const { setUserData } = authSlice.actions;

export default {
  slice: authSlice,
};
