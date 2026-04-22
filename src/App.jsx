import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store';

export default function App() {
  const count = useSelector(s => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h1>Counter</h1>
      <div style={{ fontSize: 32 }}>{count}</div>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())} style={{ marginLeft: 8 }}>+</button>
        <button onClick={() => dispatch(reset())} style={{ marginLeft: 8 }}>Reset</button>
      </div>
    </div>
  );
}
