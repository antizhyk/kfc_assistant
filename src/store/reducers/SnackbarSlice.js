import { createSlice } from '@reduxjs/toolkit';

export const SnackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    snackbar: {
      open: false,
      message: '',
      severity: 'info',
      autoHideDuration: 6000
    }
  },
  reducers: {
    setSnackbar: (state, action) => {
      state.snackbar = {
        ...action.payload,
        autoHideDuration: action?.payload?.autoHideDuration === null ? null : action?.payload?.autoHideDuration
      };
    },
    closeSnackbar: (state) => {
      state.snackbar.open = false;
      state.snackbar.message = '';
      state.snackbar.autoHideDuration = 6000;
    }
  }
});

export const { setSnackbar, closeSnackbar } = SnackbarSlice.actions;
export default SnackbarSlice.reducer;
