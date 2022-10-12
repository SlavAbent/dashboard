import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import editSvg from '../../../../assets/img/edit.svg';

import {
  TasksTitle,
  TasksItems,
  TasksWrapper,
} from './styles/index.styles'


import AddTaskForm from './AddTaskForm';
import Task from './Task';

const Tasks = ({
  list,
  onEditTitle,
  onAddTask,
  onRemoveTask,
  onEditTask,
  onCompleteTask,
  withoutEmpty
}) => {
  const editTitle = () => {
    const newTitle = window.prompt('Название списка', list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios
        .patch('http://localhost:3001/lists/' + list.id, {
          name: newTitle
        })
        .catch(() => {
          alert('Не удалось обновить название списка');
        });
    }
  };

  return (
    <TasksWrapper className="tasks">
      <Link to={`/lists/${list.id}`}>
        <TasksTitle style={{ color: list.color.hex }} className="tasks__title">
          {list.name}
          <img onClick={editTitle} src={editSvg} alt="Edit icon" />
        </TasksTitle>
      </Link>

      <TasksItems className="tasks__items">
        {!withoutEmpty && list.tasks && !list.tasks.length && (
          <h2>Задачи отсутствуют</h2>
        )}
        {list.tasks &&
          list.tasks.map(task => (
            <Task
              key={task.id}
              list={list}
              onEdit={onEditTask}
              onRemove={onRemoveTask}
              onComplete={onCompleteTask}
              {...task}
            />
          ))}
        <AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
      </TasksItems>
    </TasksWrapper>
  );
};

export default Tasks;
