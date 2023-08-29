import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  togglePanels: false,
  toggleModals: false,
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
  }
})

export const {
  togglePanels,
  toggleModals,
} = panelsSlice.actions
export default panelsSlice.reducer
