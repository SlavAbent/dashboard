import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  togglePanels: false
}

export const panelsSlice = createSlice({
  name: 'panels',
  initialState,
  reducers: {
    togglePanels: (state) => {
      state.togglePanels = !state.togglePanels
    }
  }
})

export const { togglePanels } = panelsSlice.actions

export default panelsSlice.reducer
