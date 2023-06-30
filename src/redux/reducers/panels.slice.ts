import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  togglePanels: false,
  isVisiblePanel: true,
  isHidePanel: false,
  showContextMenu: false,
  clearContextMenu: false,
  isOpenModal: false,
  isHideModal: false,
}
export const panelsSlice = createSlice({
  name: 'isTogglePanels',
  initialState,
  reducers: {
    togglePanels: (state ) => {
      state.togglePanels = !state.togglePanels;
    },
    isVisiblePanel: (state, action) => {
      state.isVisiblePanel = action.payload.isVisiblePanel(true)
    },
    isHidePanel: (state, action) => {
      state.isHidePanel = action.payload.isHidePanel(false)
    },
    showContextMenu: (state, action) => {
      state.showContextMenu = action.payload.showContextMenu(true)
    },
    clearContextMenu: (state, action) => {
      state.showContextMenu = action.payload.clearContextMenu(false)
    },
    isOpenModal: (state, action) => {
      state.isOpenModal = action.payload.isOpenModal(true)
    },
    isHideModal: (state, action) => {
      state.isHideModal = action.payload.isHideModal(false)
    },
  }
})

export const {
  togglePanels,
  isVisiblePanel,
  isHidePanel,
  showContextMenu,
  clearContextMenu,
  isOpenModal,
  isHideModal,
} = panelsSlice.actions
export default panelsSlice.reducer
