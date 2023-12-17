'use client';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAsync } from '@/store/counterSlice';
import { AppDispatch, RootState } from '@/store/store';

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      <button
        className="bg-green-300 p-4"
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        className="bg-red-300 p-4"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        className="bg-red-300 p-4"
        onClick={() => {
          dispatch(incrementAsync(1000));
        }}
      >
        incrementAsync
      </button>
      <span>{counter}</span>
    </main>
  );
}
