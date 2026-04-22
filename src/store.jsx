import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: s => { s.value += 1 },
    decrement: s => { s.value -= 1 },
    reset: () => ({ value: 0 })
  }
});

export const { increment, decrement, reset } = counterSlice.actions;

const persistConfig = { key: 'counter', storage: sessionStorage };
const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

export const store = configureStore({
  reducer: { counter: persistedReducer },
  middleware: getDefault => getDefault({
    serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
  })
});

export const persistor = persistStore(store);
