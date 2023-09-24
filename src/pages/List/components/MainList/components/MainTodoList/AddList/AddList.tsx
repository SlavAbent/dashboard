import React, { FC, useState } from 'react'
import { Plus } from 'components/Icons/Plus/Plus'
import { IList } from '../../../../../model/index.model'
import { AddListContainer, AddListWrapper, AddListIcon, AddListText } from './style/AddList.style'
import { AddListModal } from './AddListModal'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { closeModal, openModal } from 'redux/reducers/modal/modal.slice'

export interface IAddListProps {
  list: IList
  onAddTask: (id: number, data) => void
}

export const AddList: FC<IAddListProps> = ({ list, onAddTask }) => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')
  const isOpenModal = useAppSelector((state) => state.modalSlice.isOpenModal)
  const [visibleForm, setVisibleForm] = useState(false)

  const toggleVisibleForm = () => {
    setInputValue('')
    setVisibleForm(!visibleForm)
    dispatch(closeModal(true))
  }

  return (
    <AddListContainer>
      <AddListWrapper onClick={() => dispatch(openModal(true))}>
        <AddListIcon>
          <Plus size={16} />
        </AddListIcon>
        <AddListText>Новая задача</AddListText>
      </AddListWrapper>
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
  )
}
