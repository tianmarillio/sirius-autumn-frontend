import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from './store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const incrementAsync =
  (delay: number): AppThunk =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };

export default counterSlice.reducer;
