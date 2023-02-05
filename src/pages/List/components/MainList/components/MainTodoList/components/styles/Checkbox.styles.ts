import styled from 'styled-components'

export const Checkbox = styled.div`
  input {
    display: none;
  }

  svg {
    transition: opacity 0.15s ease-in-out;

    path {
      stroke: ${(p) => p.theme.colors.lightTheme.lighterGreen};
    }
  }

  input:checked + label {
    background-color: #09a21d;
    border-color: #09a21d;

    svg {
      opacity: 1;

      path {
        stroke: ${(p) => p.theme.colors.lightTheme.mainColor};
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(p) => p.theme.colors.lightTheme.mainColor};
    border-radius: 30px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }
`