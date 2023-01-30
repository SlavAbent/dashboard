import styled from 'styled-components'

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
    background-color: #09a21d;
    border-color: #09a21d;

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