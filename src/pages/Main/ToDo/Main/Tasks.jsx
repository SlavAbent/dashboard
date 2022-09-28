import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Task from './Task'
import AddTaskForm from './AddTaskForm'

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
    <div className="tasks">
      <Link to={`/lists/${list.id}`}>
        <h2 style={{ color: list.color.hex }} className="tasks__title">
          {list.name}
          <img onClick={editTitle} src={'|'} alt="Edit icon" />
        </h2>
      </Link>

      <div className="tasks__items">
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
      </div>
    </div>
  );
}

export default Tasks