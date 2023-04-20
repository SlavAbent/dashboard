import React, { useCallback, useContext, useMemo } from 'react'
import { MainTodoList } from './components/MainTodoList'
import { MainListHeader } from './components/MainListHeader'
import { MainListWrapper, MainListContainer } from './MainList.style'
import { ListContext } from '../../../../context/providers/listProvider'
import { useLocation } from 'react-router'
import axios from 'axios'
import { tasks } from 'utils/urls'
import { AddList } from './components/MainTodoList/AddList/AddList'
import { IList } from '../../model/index.model'

export const MainList = () => {
  const { response, setResponse } = useContext(ListContext)
  const location = useLocation();

  const onEditTask = useCallback((listId, taskObj) => {
    const newTaskText = window.prompt('Текст задачи', taskObj.text);

    if (!newTaskText) {
      return;
    }

    const newList = response.map(list => {
      if (list.id === listId) {
        // @ts-ignore
        list.tasks = list.tasks.map((task: any) => {
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
      .patch('http://localhost:3001/tasks/' + taskObj.id, {
        text: newTaskText
      })
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
  },[response, setResponse]);

  const onAddTask = useCallback((listId, taskObj) => {
    // TODO fix this any
    const newList = response.map((item: any) => {
      if (item.id === listId) {
        item.tasks = [...item.tasks, taskObj]
      }
      return item
    })
    setResponse(newList)
  },[response, setResponse])

  const onRemove = useCallback(((listId: number, id: number) => {
    if(window.confirm('Вы действительно хотите удалить?')) {
      // TODO fix this any
      const newList = response.map((itemTasks: any) => {
        if (itemTasks.id === listId) {
          itemTasks.tasks = itemTasks.tasks.filter((task) => task.id !== id);
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

  const onComplete = useCallback((listId: number, taskId: number, completed) => {
    const newList = response.map((list: IList) => {
      if(list.id === listId) {
        // eslint-disable-next-line array-callback-return
        // TODO fix this any
        // @ts-ignore
        list.tasks = list.tasks.map((task: any) => {
          if(task.id === taskId) task.completed = completed
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

  const data = useMemo(() => response && response.map((item) => {
    const { id, name, color, colorId, tasks } = item
    return (
      <div key={`${name}${colorId}`}>
        { location.pathname === `/List/${id}` && (
          <>
            <MainListWrapper>
              {/*<Link to={`Edit/${id}`}>*/}
                <MainListHeader
                  id={id}
                  name={name}
                  color={color}
                  colorId={colorId}
                />
              {/*</Link>*/}
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
      {data}
    </MainListContainer>
  )
}
