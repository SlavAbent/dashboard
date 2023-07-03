import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  togglePanels: false,
  toggleModals: false,
  isVisiblePanel: true,
  isHidePanel: false,
  showContextMenu: false,
  clearContextMenu: false,
  isOpenModal: false,
  isHideModal: false,
}
export const panelsSlice = createSlice({
  name: 'panels',
  initialState,
  reducers: {
    togglePanels: (state ) => {
      state.togglePanels = !state.togglePanels;
    },
    toggleModals: (state ) => {
      state.toggleModals = !state.toggleModals;
    },
    isOpenModal: (state, { payload }) => {
      state.isOpenModal = payload
    },
    isHideModal: (state, { payload  }) => {
      state.isHideModal = payload
    },
  }
})

export const {
  togglePanels,
  toggleModals,
  isOpenModal,
  isHideModal,
} = panelsSlice.actions
export default panelsSlice.reducer
