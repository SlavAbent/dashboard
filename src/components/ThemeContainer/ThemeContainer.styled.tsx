import styled from 'styled-components'

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  
  svg {
    width: 100%;
    height: 100%;
    color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor};
    cursor: pointer;
  }
`