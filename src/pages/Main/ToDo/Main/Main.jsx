import React, { useReducer, useRef, useState } from 'react'
import {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
} from './Main.style'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { DropDownMenu } from '../../../../components/uikit/DropDownMenu'
import TodoCardComponent from './components/TodoCardComponent'

const initState = {
    todos: [
      {
        title: 'test',
        description: 'test',
        completed: false,
      }
    ]
}

const ADD_TODO = 'add_todo'
const SET_TODO = 'set_todo'
const TOGGLE_TODO = 'toggle_todo'
const DELETE_TODO = 'delete_todo'


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

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: [
          {
            title:  action.payload
          }
        ]
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default: throw new Error('error')
  }
}


export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const inputTodo = useRef()

  const openCreateWindow = (event) => {
    setActiveDropDown(!activeDropDown)
  }

  const [state, dispatch] = useReducer(reducer, initState)
  console.log(state)

  const { title,
    description,
    completed,
    todos } = state

  const handleSubmit = () => {
    dispatch(addTodo(title))
  }


  return (
    <MainContainer>
      <MainWrapper>
        <MainWrapperTodo>
          <TodoCount>length</TodoCount>
          <TodoAddNewTask>
            <AiOutlinePlusCircle onClick={openCreateWindow}/>
            <TodoNewTaskTitle>add new task</TodoNewTaskTitle>
            <DropDownMenu
              width={200}
              activeDropDown={activeDropDown}
            >
              <>
                <input
                  type="text"
                  placeholder="text"
                  value={title}
                  onChange={e => dispatch(setTodo(e.target.value))}
                />
                {/*<input*/}
                {/*  type="text"*/}
                {/*  placeholder="description"*/}

                {/*/>*/}
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
        {todos.map((todo, index) => {
          const {title, description, completed} = todo
          return (
            <TodoCardComponent
              key={index}
              title={title}
              description={description}
              completed={completed}
            />
          )
        })}
      </MainWrapper>
    </MainContainer>
  )
}