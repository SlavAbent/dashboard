import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { Plus } from 'components/Icons/Plus/Plus'
import { Button } from 'stories/UI/Components/Button'
import { IList } from '../../../../../model/index.model'

import {
  AddListContainer,
  AddListWrapper,
  AddListIcon,
  AddListText,
  AddListForm,
} from './AddList.style'
import axios from 'axios'
import { tasks } from '../../../../../../../shared/urls'
import { Modal } from '../../../../../../../components/uikit/Modal'
import { Close } from '../../../../../../../components/Icons/Close'

interface IAddListProps {
  list: IList
  onAddTask: (id: number, data) => void
}

export const AddList:FC<IAddListProps> = ({ list, onAddTask }) => {
  const [inputValue, setInputValue] = useState('')
  const [visibleForm, setVisibleForm] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const buttonStatusSuccess = `${loading ? 'Добавление...'  : 'Добавить'}`

  const toggleVisibleForm = () => {
    setInputValue('')
    setVisibleForm(!visibleForm)
    setIsOpen((prev) => !prev)
  }

  const handleToggleVisibleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

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
      {/* TODO refactor all input in project to your component*/}
      <input
        value={inputValue}
        placeholder="Новая задача"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <Button
        type="button"
        children={buttonStatusSuccess}
        isDisabled={loading}
        onClick={addList}
      />
      <Button
        type="button"
        children='Отмена'
        onClick={toggleVisibleForm}
      />
    </AddListForm>
  )

  return (
    <AddListContainer>
      { !visibleForm && (
          <AddListWrapper onClick={toggleVisibleForm}>
            <AddListIcon>
              <Plus size={16} />
            </AddListIcon>
            <AddListText>Новая задача</AddListText>
          </AddListWrapper>
        )}
        <Modal
          customMode
          customHeader={(<p>custom</p>)}
          title='title'
          iconClose={(<Close size={24}/>)}
          isOpen={isOpen}
          handleClose={handleToggleVisibleModal}
          content={content}
        />
    </AddListContainer>
  )
}
