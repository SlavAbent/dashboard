import React, { useReducer, useState } from 'react'
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
  job: '',
  jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
    }
    break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    default: throw new Error('error')
  }
  return newState
}


export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)

  const openCreateWindow = (event) => {
    setActiveDropDown(!activeDropDown)
  }

  const [state, dispatch] = useReducer(reducer, initState)

  const { job, jobs } = state

  const handleSubmit = () => {
    dispatch(addJob(job))
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
                  value={job}
                  onChange={e => {
                    dispatch(setJob(e.target.value))
                  }}
                />
                <input
                  type="text"
                  placeholder="description"

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
        {jobs.map((job) => {
          return (
            <TodoCardComponent job={job}/>
          )
        })}
      </MainWrapper>
    </MainContainer>
  )
}