import React, { useContext, useMemo } from 'react'
import { MainTodoList } from './components/MainTodoList'
import { MainListHeader } from './components/MainListHeader'
import { MainListWrapper } from './MainList.style'
import { ListContext } from '../utility/context/ListProvider'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { tasks } from 'utils/urls'
import { AddList } from './components/MainTodoList/AddList/AddList'
import { IList } from '../utility/types/index.model'

const MainList = () => {
  const { response, setResponse } = useContext(ListContext)
  const location = useLocation();

  const onAddTask = (listId, taskObj) => {
    // TODO fix this any
    const newList = response.map((item: any) => {
      if (item.id === listId) {
        item.tasks = [...item.tasks, taskObj]
      }
      return item
    })
    setResponse(newList)
  }

  const onRemove = ((listId: number, id: number) => {
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
  })

  const onEdit = () => {

  }

  const onComplete = (listId: number, taskId: number, completed) => {
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
  }

  const data = useMemo(() => response && response.map((item) => {
    const { id, name, color, colorId, tasks } = item
    return (
      <div key={`${name}${colorId}`}>
        { location.pathname === `/List/${id}` ? (
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
                onEdit={onEdit}
                onComplete={onComplete}
              />
            </MainListWrapper>
            <AddList
              list={item}
              onAddTask={onAddTask}
            />
          </>

        ) : null }
      </div>
    )
  }), [response, location.pathname, onRemove, onAddTask])
  return (
    <div>
      {data}
    </div>
  )
}

export default MainList