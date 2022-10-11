import React, { useState } from 'react';
import axios from 'axios';

import addSvg from '../../../../assets/img/add.svg';
import {
  TasksForm,
  TasksFormNew,
  TasksFormBlock,
  TasksFormButton,
} from './styles/AddFormTask.styles'

const AddTaskForm = ({ list, onAddTask }) => {
  const [visibleForm, setFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const toggleFormVisible = () => {
    setFormVisible(!visibleForm);
    setInputValue('');
  };

  const addTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false
    };
    setIsLoading(true);
    axios
      .post('http://localhost:3001/tasks', obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        toggleFormVisible();
      })
      .catch(e => {
        alert('Ошибка при добавлении задачи!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <TasksForm>
      {!visibleForm ? (
        <TasksFormNew onClick={toggleFormVisible}>
          <img src={addSvg} alt="Add icon" />
          <span>Новая задача</span>
        </TasksFormNew>
      ) : (
        <TasksFormBlock>
          <input
            value={inputValue}
            className="field"
            type="text"
            placeholder="Текст задачи"
            onChange={e => setInputValue(e.target.value)}
          />
          <TasksFormButton disabled={isLoading} onClick={addTask}>
            {isLoading ? 'Добавление...' : 'Добавить задачу'}
          </TasksFormButton>
          <TasksFormButton onClick={toggleFormVisible} className="button--grey">
            Отмена
          </TasksFormButton>
        </TasksFormBlock>
      )}
    </TasksForm>
  );
};

export default AddTaskForm;
