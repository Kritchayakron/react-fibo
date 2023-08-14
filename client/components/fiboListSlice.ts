import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiClient from './apiClient';
import { act } from 'react-test-renderer';

export type FiboListState = {
  fibo : [],
  fiboValue : Number;
};

const initialState: FiboListState = {
  fibo : [0,1],
  fiboValue : 1
};
export const fiboCal = createAsyncThunk(
  'fiboCal',
  async (data) => {
    //console.log(data);
    const response = await apiClient.fiboCal(data);
   
    if (response.kind === 'success') {
      return {
        next: response.next ?? [],
        data: response.data ?? [],
        type : data.type
      };
    } else {
      throw 'Error fetching users';
    }
  },
);


const fiboSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fiboCal.pending, (state) => {
    })
    .addCase(fiboCal.fulfilled, (state, action) => {
      //console.log(action.payload)
      state.fiboValue = action.payload.next
      if(action.payload.type == 'plus') {
        state.fibo = action.payload.data;
      } else{
        if(state.fibo.length > 1) {
          state.fibo.pop();
        }
      }
    })
    .addCase(fiboCal.rejected, (state) => {
     // console.log('rejected');
    });
    
  },
});

export default fiboSlice.reducer;