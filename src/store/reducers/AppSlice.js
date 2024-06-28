import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    mainLoader: false,
  },
  reducers: {
    setMainLoader(state, action) {
      state.mainLoader = action.payload;
    },
  },
})

export const { setMainLoader } = AppSlice.actions;
export default AppSlice.reducer;