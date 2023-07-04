import React, { ChangeEvent, FC, useState } from 'react'
import { Plus } from 'components/Icons/Plus/Plus'
import { Button } from 'stories/UI/Components/Button'
import { IList } from '../../../../../model/index.model'

import {
  AddListContainer,
  AddListWrapper,
  AddListIcon,
  AddListText,
  AddListForm, AddListFormFooter
} from './AddList.style'
import axios from 'axios'
import { tasks } from 'shared/urls'
import { Modal } from 'components/uikit/Modal'
import { Close } from 'components/Icons/Close'
import { useAppDispatch } from 'redux/hooks/useAppDispatch'
import { toggleModals } from 'redux/reducers/panels.slice'
import { useAppSelector } from 'redux/hooks/useAppSelector'
import { Input } from 'stories/UI/Inputs/TextInput/styled/TextInput.styles'

interface IAddListProps {
  list: IList
  onAddTask: (id: number, data) => void
}

export const AddList:FC<IAddListProps> = ({ list, onAddTask }) => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')
  const [visibleForm, setVisibleForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const openModal = useAppSelector((state) => state.togglePanels.toggleModals)

  const buttonStatusSuccess = `${loading ? 'Добавление...'  : 'Добавить'}`
  const inputValueValidate = inputValue.trim() && inputValue.length !== 0

  const toggleVisibleForm = () => {
    setInputValue('')
    setVisibleForm(!visibleForm)
    dispatch(toggleModals())
  }

  const handleCloseModal = () => {
    dispatch(toggleModals())
  }

  const addList = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false
    }
    setLoading(true)
    // TODO refactor axios to useAxios
    axios
      .post(tasks, obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        toggleVisibleForm();
      })
      .catch(error => {
        console.error(error)
        alert('Ошибка при добавлении задачи!');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const content = (
    <AddListForm>
      <Input
        value={inputValue}
        placeholder="Новая задача"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <AddListFormFooter>
        <Button
          type="button"
          children={buttonStatusSuccess}
          isDisabled={loading || !inputValueValidate}
          onClick={addList}
          className='success'
          size={'small'}
          icon={<Plus />}
          isIcon
          iconPosition='left'
        />
        <Button
          type="button"
          children='Отмена'
          onClick={toggleVisibleForm}
          className='danger'
          size={'small'}
        />
      </AddListFormFooter>
    </AddListForm>
  )

  return (
    <AddListContainer>
      <AddListWrapper onClick={() => dispatch(toggleModals())}>
        <AddListIcon>
          <Plus size={16} />
        </AddListIcon>
        <AddListText>Новая задача</AddListText>
      </AddListWrapper>
      <Modal
        customMode
        customHeader={(<p>custom</p>)}
        title='title'
        iconClose={(
          <Close
            size={24}
            color="#000000"
          />
        )}
        isOpen={openModal}
        handleClose={handleCloseModal}
        content={content}
        isIconClose
      />
    </AddListContainer>
  )
}
