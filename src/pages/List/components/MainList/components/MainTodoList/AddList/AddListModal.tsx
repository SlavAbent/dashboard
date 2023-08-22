import React, { Dispatch, FC, SetStateAction } from 'react'
import { Close } from '../../../../../../../components/Icons/Close'
import { AddListForm } from './AddListForm'
import { Modal } from '../../../../../../../components/uikit/Modal'
import { toggleModals } from 'redux/reducers/panels.slice'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { IList } from '../../../../../model/index.model'

interface AddListModalProps {
  inputValue?: string
  loading?: boolean
  list: IList
  onAddTask: (id: number, data: any) => void
  toggleVisibleForm?: () => void
  setInputValue?: Dispatch<SetStateAction<string>>
}

export const AddListModal: FC<AddListModalProps> = (props) => {
  const {
    list,
    inputValue,
    loading,
    toggleVisibleForm,
    setInputValue,
    onAddTask,
  } = props

  const dispatch = useAppDispatch()
  const isOpenModal = useAppSelector((state) => state.togglePanels.toggleModals)

  const buttonStatusSuccess = `${loading ? 'Добавление...'  : 'Добавить'}`
  const inputValueValidate = inputValue?.trim() && inputValue?.length !== 0
  const handleCloseModal = () => {
    if (isOpenModal) {
      dispatch(toggleModals())
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
        title='title'
        isIconClose
        iconClose={(
          <Close
            size={24}
            color="#000000"
          />
        )}
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        content={modalContent}
      />
    </>

  )
}

