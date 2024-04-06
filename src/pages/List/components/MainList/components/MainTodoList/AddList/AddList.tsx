import React, { FC, useState } from "react";
import { Plus } from "components/Icons/Plus/Plus";
import { IList } from "../../../../../model/index.model";
import { AddListContainer, AddListIcon } from "./style/AddList.style";
import { AddListModal } from "./AddListModal";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { closeModal, openModal } from "redux/reducers/modal/modal.slice";
import { ANTDButton } from "../../../../../../../stories/UI/ANTD/Button";

export interface IAddListProps {
  list: IList
  onAddTask: (id: number, data) => void
}

export const AddList: FC<IAddListProps> = ({ list, onAddTask }) => {
	const dispatch = useAppDispatch();
	const [inputValue, setInputValue] = useState("");
	const isOpenModal = useAppSelector((state) => state.modalSlice.isOpenModal);
	const [visibleForm, setVisibleForm] = useState(false);

	const toggleVisibleForm = () => {
		setInputValue("");
		setVisibleForm(!visibleForm);
		dispatch(closeModal(true));
	};


	return (
		<AddListContainer>
			<ANTDButton
				type={"primary"}
				className={"button-dropDown"}
				onClick={() => dispatch(openModal(true))}
				size={"large"}
				textTransform={"lowercase"}
				defaultIcon
				iconNode={<AddListIcon><Plus size={16} color='#ffffff' /></AddListIcon>}
			>Новая задача</ANTDButton>
			{isOpenModal && (
				<AddListModal
					list={list}
					onAddTask={onAddTask}
					inputValue={inputValue}
					toggleVisibleForm={toggleVisibleForm}
					setInputValue={setInputValue}
				/>
			)}
		</AddListContainer>
	);
};
