import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiClient from './apiClient';

export type FiboListState = {
  fibo : [],
  fiboValue : Number;
};

const initialState: FiboListState = {
  fibo : [1],
  fiboValue : 1
};
export const fiboCal = createAsyncThunk(
  'fiboCal',
  async (data) => {
    
    const response = await apiClient.fiboCal(data);
   
    if (response.kind === 'success') {
      return {
        next: response.body ?? [],
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
      // console.log('pending');
    })
    .addCase(fiboCal.fulfilled, (state, action) => {
     
      state.fiboValue = action.payload.next
      console.log(action.payload);
      if(action.payload.type == 'plus') {
        state.fibo.push(action.payload.next);
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