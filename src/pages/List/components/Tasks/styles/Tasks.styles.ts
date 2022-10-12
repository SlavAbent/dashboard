import styled from 'styled-components'


export const TasksItemsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:hover &-actions {
    opacity: 1;
  }
`

export const Checkbox = styled.div`
  input {
    display: none;
  }

  svg {
    transition: opacity 0.15s ease-in-out;
    path {
      stroke: #f2f2f2;
    }
  }

  input:checked + label {
    background-color: #4dd599;
    border-color: #4dd599;

    svg {
      opacity: 1;
      path {
        stroke: #fff;
      }
    }
  }

  &:hover {
    label {
      background-color: #f2f2f2;
      border-color: #f2f2f2;
      svg {
        opacity: 1;
        path {
          stroke: #b2b2b2;
        }
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e8e8e8;
    border-radius: 30px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

    svg {
      opacity: 0;
    }
  }
`

export const TasksItemsP = styled.div`
  margin-left: 15px;
  border: 0;
  font-size: 16px;
  width: 100%;
`

export const TasksItemsRowActions = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: lighten(#f4f6f8, 2%);
    border-radius: 6px;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      background-color: darken(#f4f6f8, 2%);
      svg {
        opacity: 0.9;
      }
    }

    svg {
      width: 11px;
      height: 11px;
      opacity: 0.4;
    }
  }
`