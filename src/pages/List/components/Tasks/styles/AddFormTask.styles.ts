import styled from 'styled-components'

export const TasksForm = styled.div`
  margin-top: 20px;
`

export const TasksFormNew = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  span {
    font-size: 16px;
    margin-left: 19px;
  }
`

export const TasksFormBlock = styled.div`
  display: block;
`

export const TasksFormButton = styled.button`
  margin-right: 10px;
  margin-top: 15px;
`