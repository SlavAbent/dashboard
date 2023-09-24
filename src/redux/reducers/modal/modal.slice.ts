import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenModal: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true
    },
    closeModal: (state, action) => {
      state.isOpenModal = false
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
