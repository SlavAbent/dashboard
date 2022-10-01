import React, { useReducer, useRef, useState } from 'react'
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
import moment from 'moment'

const initState = {
    title: '',
    description: '',
    completed: false,
    date: '',
    todos: [],
    viewCard: []
}

const ADD_TODO = 'add_todo'
const SET_TODO = 'set_todo'
const TOGGLE_TODO = 'toggle_todo'
const DELETE_TODO = 'delete_todo'
const VIEW_TODO = 'view_todo'


const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  }
}

const setTodo = payload => {
  return {
    type: SET_TODO,
    payload
  }
}

const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  }
}

const toggleTodo = payload => {
  return {
    type: TOGGLE_TODO,
    payload
  }
}

const viewCard = payload => {
  return {
    type: VIEW_TODO,
    payload
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        title: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().getTime().toString(),
            title: action.payload,
            date: moment().format('DD MMM YYYY HH:mm'),
            completed: false,
          }
        ]
      }
    case DELETE_TODO:
      const newTodo = state.todos.filter(elem => elem.id !== action.payload)
      return {
        ...state,
        todos: newTodo
      }
    case TOGGLE_TODO:
      const toggledTodo = state.todos.map(elem => elem.id === action.payload
        ? { ...elem, completed: !elem.completed }
        : elem
      )
      return {
        ...state,
        todos: toggledTodo
      }
    case VIEW_TODO:
      // const toggleView = state.todos.map(elem => )
      return {
        // ...state,
        // todos:
      }
    default: throw new Error('error')
  }
}


export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const titleRef = useRef()

  const openCreateWindow = () => {
    setActiveDropDown(!activeDropDown)
  }

  const [state, dispatch] = useReducer(reducer, initState)
  const { title, todos } = state

  const inputTitleData = () => {
    dispatch(setTodo(titleRef.current.value))
  }

  const handleSubmit = () => {
    dispatch(addTodo(title))
    dispatch(setTodo(''))
  }

  const handleDeleteTodo = (index) => {
      dispatch(deleteTodo(index))
  }

  const handleToggleTodo = index => {
    dispatch(toggleTodo(index))
  }

  const handleViewCard = () => {
    dispatch(viewCard())
  }


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
              <>
                <input
                  ref={titleRef}
                  type="text"
                  placeholder="Enter text"
                  value={title}
                  onChange={inputTitleData}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                >
                  add task
                </button>
              </>
            </DropDownMenu>
          </TodoAddNewTask>
        </MainWrapperTodo>
        <MainWrapperContent>
        {todos.map((todo) => {
          const {title, description, completed, date, id} = todo
          return (
            <TodoCardComponent
              key={id}
              index={id}
              date={date}
              title={title}
              viewCard={true}
              completed={completed}
              description={description}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
              handleViewCard={handleViewCard}
            />)
        })}
        </MainWrapperContent>
      </MainWrapper>
    </MainContainer>
  )
}