import React, { FC, useState } from 'react'
import { Plus } from 'components/Icons/Plus/Plus'
import { IList } from '../../../../../model/index.model'
import {
  AddListContainer,
  AddListWrapper,
  AddListIcon,
  AddListText,
} from './style/AddList.style'
import { toggleModals } from 'redux/reducers/panels.slice'
import { AddListModal } from './AddListModal'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

export interface IAddListProps {
  list: IList
  onAddTask: (id: number, data) => void
}

export const AddList:FC<IAddListProps> = ({ list, onAddTask }) => {
  const dispatch = useAppDispatch()
  const isOpenModal = useAppSelector((state) => state.togglePanels.toggleModals)
  const [inputValue, setInputValue] = useState('')
  const [visibleForm, setVisibleForm] = useState(false)

  const toggleVisibleForm = () => {
    setInputValue('')
    setVisibleForm(!visibleForm)
    dispatch(toggleModals())
  }

  return (
    <AddListContainer>
      <AddListWrapper onClick={() => dispatch(toggleModals())}>
        <AddListIcon>
          <Plus size={16} />
        </AddListIcon>
        <AddListText>Новая задача</AddListText>
      </AddListWrapper>
      { isOpenModal && (
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
