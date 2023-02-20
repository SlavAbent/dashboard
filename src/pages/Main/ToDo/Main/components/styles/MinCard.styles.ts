import styled from 'styled-components'

export const MinCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  background-color: ${props => props.theme.colors.darkTheme.grey_darked};
  box-sizing: border-box;
`

export const MinCardTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.lightTheme.mainColor};
  &.completed {
    text-decoration: line-through;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`
