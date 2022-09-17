import React, { useCallback, useContext, useMemo, useState } from 'react'
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

export const Main = ({lists}) => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [title, setTitle] = useState<string>('')
  // @ts-ignore
  const {state: {todos}, dispatch } = useContext(TodoListContext);


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
    return (
      lists.map(list => {
        return (
          <>
            <TodoAddNewTask className="bigTodo">
              <TodoNewTaskTitle>{list?.name}</TodoNewTaskTitle>
              {list && <input type="text" placeholder={list?.name}/>}
            </TodoAddNewTask>
            <>
              {
                list.tasks?.map(task => {
                  return (
                    <MainWrapperContent key={task.id} className="bigTodoTask">
                      <div>
                        <input type='checkbox'/>
                        <input value={task.text}/>
                        <span>x</span>
                      </div>
                    </MainWrapperContent>
                  )
                })
              }
            </>
          </>
        )
      })
    )
  }, [lists]);

  const todosArray = useMemo(() => {
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
          <TodoAddNewTask >
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
