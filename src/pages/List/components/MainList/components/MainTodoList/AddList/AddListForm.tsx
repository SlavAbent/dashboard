import React, { ChangeEvent, FC, JSX, useState } from 'react'
import { Input } from '../../../../../../../stories/UI/Inputs/TextInput/styled/TextInput.styles'
import { AddListFormFooter, AddListFormWrapper } from './style/AddList.style'
import { ANTDButton } from '../../../../../../../stories/UI/ANTD/Button'
import axios from 'axios'
import { tasks } from '../../../../../../../shared/urls'
import { IList } from '../../../../../model/index.model'

interface AddListFormProps {
  list?: IList
  addList?: () => void
  onAddTask?: (id: number | any, data: any) => void
  inputValue?: string
  setInputValue?: (value: string) => void
  buttonStatusSuccess?: string
  inputValueValidate?: boolean | string
  toggleVisibleForm?: () => void
  children?: JSX.Element | JSX.Element[];
}

export const AddListForm:FC<AddListFormProps> = (props) => {
  const {
    list,
    onAddTask,
    inputValue,
    setInputValue,
    buttonStatusSuccess,
    inputValueValidate,
    toggleVisibleForm,
  } = props

  const [loading, setLoading] = useState(false)

  //TODO context or hook
  const addList = () => {
    const obj = {
      listId: list?.id,
      text: inputValue,
      completed: false
    }
    setLoading(true)
    // TODO refactor axios to useAxios
    axios
      .post(tasks, obj)
      .then(({ data }) => {
        if (onAddTask) {
          onAddTask(list?.id, data)
        }
        if (toggleVisibleForm) {
          toggleVisibleForm()
        }
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
    <AddListFormWrapper>
      <Input
        value={inputValue}
        placeholder="Новая задача"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue ? setInputValue(e.target.value) : null}
      />
      <AddListFormFooter>
        <ANTDButton
          children={buttonStatusSuccess}
          disable={loading || !inputValueValidate}
          onClick={addList}
          className='success'
          size={'small'}
        />
        <ANTDButton
          children='Отмена'
          onClick={toggleVisibleForm}
          className='danger'
          size={'small'}
        />
      </AddListFormFooter>
    </AddListFormWrapper>
  )
}

