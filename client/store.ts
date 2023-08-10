import {combineReducers, configureStore} from '@reduxjs/toolkit';
import FiboListState from './components/fiboListSlice';
import fiboSlice from './components/fibo/fiboSlice';

const rootReducer = combineReducers({
  fiboList: FiboListState,
  // fiboList: fiboSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;