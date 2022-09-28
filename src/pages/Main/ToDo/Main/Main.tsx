import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
  MainWrapperContent,
} from './Main.style'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { DropDownMenu } from '../../../../components/uikit/DropDownMenu'
import TodoCardComponent from './components/TodoCardComponent'
import { TodoListContext } from '../../../../redux/context/Provider'
import TodoDropDown from './components/TodoDropDown/TodoDropDown'
import { TodoActionsTypes } from '../../../../redux/todoTypes/todoEnums'
import moment from 'moment'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Tasks from './Tasks'

export const Main = ({
   lists,
   onEditTitle,
   onAddTask,
   onRemoveTask,
   onEditTask,
   onComplete,
   withoutEmpty,
   activeItem,
   setActiveItem,
  }) => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [title, setTitle] = useState<string>('')
  let navigate = useNavigate();
  // @ts-ignore
  const {state: {todos}, dispatch } = useContext(TodoListContext);


  useEffect(() => {
    // const listId = navigate.location.pathname.split('lists/')[1];
    const listId = 0;
    if (lists) {
      const list = lists.find(list => list.id === Number(listId));
      setActiveItem(list);
    }
  }, [lists]);

  //Functions
  const openCreateWindow = () => setActiveDropDown(!activeDropDown)
  const handleChange = ({target : {value}}) => setTitle(value)

  const handleDeleteTodo = useCallback((index: number) => {
    dispatch({
      type: TodoActionsTypes.DELETE_TODO,
      payload: index
    })
  }, [dispatch])

  const handleToggleTodo = useCallback((index: number) => {
    dispatch({
      type: TodoActionsTypes.TOGGLE_TODO,
      payload: index
    })
  }, [dispatch])

  const handleSubmit = () => {
    setTitle('')
    dispatch({
      type: TodoActionsTypes.ADD_TODO,
      payload: {
        id: crypto.randomUUID(),
        title,
        date: moment().format('DD MMM YYYY HH:mm'),
        completed: false
      }
    })
  }

  const handleEnter = e => {
    if(e.key === 'Enter') handleSubmit()
  }

  const listArray = useMemo(() => {
    // TASKS
    return (
      lists && lists.map(list => {
        return (
          <>
            <TodoAddNewTask className="bigTodo">
              <Link to={`/lists/${list.id}`}>
                <TodoNewTaskTitle style={{ color: list.color.hex }} className="tasks__title">
                  {list?.name}
                  <img src={''} alt="Edit icon" />
                </TodoNewTaskTitle>
              </Link>
            </TodoAddNewTask>
            <>
              {!withoutEmpty && list.tasks && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
              { list.tasks && list.tasks?.map(task => {
                // TASK
                return (
                  <>
                    <Routes>
                      <Route
                        path="/"
                        element={lists && lists.map(list => (
                          <Tasks
                            key={list.id}
                            list={list}
                            onAddTask={onAddTask}
                            onEditTitle={onEditTitle}
                            onRemoveTask={onRemoveTask}
                            onEditTask={onEditTask}
                            onCompleteTask={onComplete}
                            withoutEmpty
                          />
                        ))}>
                      </Route>
                      <Route
                        path="/lists/:id"
                        element={lists && activeItem && (
                          <Tasks
                            list={activeItem}
                            onAddTask={onAddTask}
                            onEditTitle={onEditTitle}
                            onRemoveTask={onRemoveTask}
                            onEditTask={onEditTask}
                            onCompleteTask={onComplete}
                            withoutEmpty={withoutEmpty}
                          />
                        )}>
                      </Route>
                    </Routes>
                  </>
                )
              })}
            </>
          </>
        )
      })
    )
  }, [lists]);

  const todosArray = useMemo(() => {
    // TODO LEFTSIDE ON MAIN
    return (
      todos.map((todo) => {
        const { description, completed, date, id} = todo
        return (
          <TodoCardComponent
            key={id}
            index={id}
            date={date}
            title={todo.title}
            completed={completed}
            description={description}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />)
      })
    )
  }, [handleDeleteTodo, handleToggleTodo, todos]);

  return (
    <MainContainer>
      <MainWrapper>
        <MainWrapperTodo>
          <TodoCount>{todos.length}</TodoCount>
          <TodoAddNewTask>
            <AiOutlinePlusCircle onClick={openCreateWindow}/>
            <TodoNewTaskTitle>add task</TodoNewTaskTitle>
            <DropDownMenu
              width={200}
              activeDropDown={activeDropDown}
            >
              <TodoDropDown
                title={title}
                handleEnter={handleEnter}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setActiveDropDown={setActiveDropDown}
              />
            </DropDownMenu>
          </TodoAddNewTask>
        </MainWrapperTodo>
        <MainWrapperContent>{todosArray}</MainWrapperContent>
      </MainWrapper>
      <MainWrapper>
        <MainWrapperTodo>{listArray}</MainWrapperTodo>
      </MainWrapper>
    </MainContainer>
  )
}
