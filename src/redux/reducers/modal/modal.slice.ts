import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpenModal: false
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isOpenModal = action.payload;
		},
		closeModal: (state, action) => {
			state.isOpenModal = action.payload;
		}
	}
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
