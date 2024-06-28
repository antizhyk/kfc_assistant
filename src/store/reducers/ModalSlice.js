// create modalSlice

import { createSlice } from '@reduxjs/toolkit';

export const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    modalProps: {}
  },
  reducers: {
    openModal(state, action) {
      const { modalType, modalProps } = action.payload;
      state.modalType = modalType;
      state.modalProps = modalProps;
    },
    closeModal(state) {
      state.modalType = null;
      state.modalProps = {};
    }
  }
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;