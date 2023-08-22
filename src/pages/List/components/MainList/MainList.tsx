import React, { useCallback, useContext, useMemo } from 'react'
import { MainTodoList } from './components/MainTodoList/MainTodoList'
import { MainListHeader } from './components/MainListHeader'
import { MainListWrapper, MainListContainer } from './MainList.style'
import { ListContext } from '../../../../context/providers/listProvider'
import { useLocation } from 'react-router'
import axios from 'axios'
import { tasks } from 'shared/urls'
import { AddList } from './components/MainTodoList/AddList'
import { IList, Tasks } from '../../model/index.model'
import { Link } from 'react-router-dom'

export const MainList = () => {
  const { response, setResponse } = useContext(ListContext)
  const location = useLocation();

  const onEditTask = useCallback((listId, taskObj) => {
    const newTaskText = window.prompt('Текст задачи', taskObj.text);

    if (!newTaskText) {
      return;
    }

    const newList = response.map((list: IList) => {
      if (list.id === listId) {
        list.tasks = list.tasks.map((task: Tasks) => {
          if (task.id === taskObj.id) {
            task.text = newTaskText;
          }
          return task;
        });
      }
      return list;
    });
    setResponse(newList);
    axios
      .patch('http://localhost:4001/tasks/' + taskObj.id, {
        text: newTaskText
      })
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
  },[response, setResponse]);

  const onAddTask = useCallback((listId, taskObj) => {
    console.log(listId, taskObj)
    const newList = response.map((item: IList) => {
      if (item.id === listId) {
        item.tasks = [...item.tasks, taskObj]
      }
      return item
    })
    setResponse(newList)
  },[response, setResponse])

  const onRemove = useCallback(((listId: number, id: number): void => {
    if(window.confirm('Вы действительно хотите удалить?')) {
      const newList = response.map((itemTasks: IList) => {
        if (itemTasks.id === listId) {
          itemTasks.tasks = itemTasks.tasks.filter((task: Tasks): boolean => task.id !== id);
        }
        return itemTasks;
      });
      setResponse(newList)
      // TODO refactor this axios to useAxios
      axios.delete(tasks + id).catch(() => {
        alert('Не удалось удалить задачу');
      });
    }
  }),[response, setResponse])

  const onComplete = useCallback((listId: number, taskId: number, completed): void => {
    const newList = response.map((list: IList) => {
      if (list.id === listId) {
        list.tasks = list.tasks.map((task: Tasks) => {
          if (task.id === taskId) task.completed = completed
          return task
        })
      }
      return list
    })
    setResponse(newList)
    // TODO refactor this axios to useAxios
    axios
      .patch(tasks + taskId, {
        completed
      })
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
  }, [response, setResponse])

  const createAllTasksOnPage = useMemo(() => response && response.map((item: IList) => {
    const { id, name, color, colorId, tasks } = item
    return (
      <div key={`${name}${colorId}`}>
        { location.pathname === `/List/${id}` && (
          <>
            <MainListWrapper>
              <Link to={`Edit/${id}`}>
                <MainListHeader
                  id={id}
                  name={name}
                  color={color}
                  colorId={colorId}
                />
              </Link>
              <MainTodoList
                tasks={tasks}
                onRemove={onRemove}
                onEdit={onEditTask}
                onComplete={onComplete}
              />
            </MainListWrapper>
            <AddList
              list={item}
              onAddTask={onAddTask}
            />
          </>
        )}
      </div>
    )
  }), [response, location.pathname, onRemove, onEditTask, onComplete, onAddTask])
  return (
    <MainListContainer>
      {createAllTasksOnPage}
    </MainListContainer>
  )
}
