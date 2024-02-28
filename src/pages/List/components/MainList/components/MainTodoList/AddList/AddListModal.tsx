import React, { Dispatch, FC, SetStateAction, useContext } from 'react'
import { Close } from 'components/Icons/Close'
import { AddListForm } from './AddListForm'
import { Modal } from 'components/uikit/Modal'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { IList } from '../../../../../model/index.model'
import { closeModal } from 'redux/reducers/modal/modal.slice'
import { ThemeContext } from '../../../../../../../context/themeContext'

interface AddListModalProps {
  inputValue?: string
  loading?: boolean
  list: IList
  onAddTask: (id: number, data: any) => void
  toggleVisibleForm?: () => void
  setInputValue?: Dispatch<SetStateAction<string>>
}

export const AddListModal: FC<AddListModalProps> = (props) => {
  const { list, inputValue, loading, toggleVisibleForm, setInputValue, onAddTask } = props
  const { toggleTheme } = useContext(ThemeContext)
  const dispatch = useAppDispatch()
  const isOpenModal = useAppSelector((state) => state.modalSlice)

  const buttonStatusSuccess = `${loading ? 'Добавление...' : 'Добавить'}`
  const inputValueValidate = inputValue?.trim() && inputValue?.length !== 0
  const handleCloseModal = () => {
    if (isOpenModal) {
      dispatch(closeModal(true))
    }
  }

  const modalContent = (
    <AddListForm
      list={list}
      inputValue={inputValue}
      setInputValue={setInputValue}
      buttonStatusSuccess={buttonStatusSuccess}
      inputValueValidate={inputValueValidate}
      toggleVisibleForm={toggleVisibleForm}
      onAddTask={onAddTask}
    />
  )

  return (
    <>
      <Modal
        customMode
        title="title"
        isIconClose
        iconClose={<Close size={24} color="#000000" />}
        isOpen={!!isOpenModal}
        handleClose={handleCloseModal}
        content={modalContent}
        theme={toggleTheme}
      />
    </>
  )
}
