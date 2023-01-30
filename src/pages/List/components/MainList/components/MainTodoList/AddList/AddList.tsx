import React, { FC, useState } from 'react'
import { Plus } from 'components/Icons/Plus/Plus'
import { Button } from 'components/uikit/Button'
import { IList } from '../../../../utility/types/index.model'

import {
  AddListContainer,
  AddListWrapper,
  AddListIcon,
  AddListText,
  AddListForm,
} from './AddList.style'
import axios from 'axios'
import { tasks } from '../../../../../../../utils/urls'

interface IAddListProps {
  list: IList
  onAddTask: (id: number, data: any) => void
}

export const AddList:FC<IAddListProps> = ({ list, onAddTask }) => {
  const [inputValue, setInputValue] = useState('')
  const [visibleForm, setVisibleForm] = useState(false)
  const [loading, setLoading] = useState(false)

  const buttonStatusSuccess = `${loading ? 'Добавление...'  : 'Добавить'}`

  const toggleVisibleForm = () => {
    setInputValue('')
    setVisibleForm(!visibleForm)
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
        console.log(data)
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

  return (
    <AddListContainer>
      { !visibleForm ? (
          <AddListWrapper onClick={toggleVisibleForm}>
            <AddListIcon>
              <Plus size={16} color='#ffffff' />
            </AddListIcon>
            <AddListText>Новая задача</AddListText>
          </AddListWrapper>
        ) : (

          <AddListForm>
            {/* TODO refactor all input in project to your component*/}
            <input
              value={inputValue}
              placeholder="Новая задача"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
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
      )}
    </AddListContainer>
  )
}
