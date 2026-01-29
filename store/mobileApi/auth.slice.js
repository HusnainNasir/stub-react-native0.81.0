import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  userData: {},

};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
  },
  extraReducers: builder => {

  },
});


export default {
  slice: authSlice,
};
