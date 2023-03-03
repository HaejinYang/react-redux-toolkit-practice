import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log(action);
      // 툴킷을 쓰면 복제를 할 필요가 없다.
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const {up} = counterSlice.actions;