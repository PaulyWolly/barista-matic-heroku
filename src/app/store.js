import { configureStore } from '@reduxjs/toolkit';
import unitsReducer from '../features/units/unitsSlice';


export const store = configureStore({
  reducer: {
    counter: unitsReducer,
  }
})