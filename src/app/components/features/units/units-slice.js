import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
}

export const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    // actions
    increment: (state) => {
      state.units += 1;
    },
    decrement: (state) => {
      state.units -= 1;
    },
    reset: (state) => {
      state.units = 0;
    },
    incrementByAmount: (state, action) => {
      state.units += action.payload;
    }
  }
})

// ducks pattern exports
export const { increment, decrement, reset, incrementByAmount } = unitsSlice.actions;

export default unitsSlice.reducer;
