import styled from 'styled-components'

export const MainTodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:  ${(p) => p.theme.margin.small};
  margin-bottom:  ${(p) => p.theme.margin.small};
  & .completed {
    background-color: ${props => props.theme.colors.lighterGreen};
    border-radius: ${props => props.theme.decoration.borderRadius.default};
    border-bottom: 1px solid ${props => props.theme.colors.lighterGreen};
  }
`

export const MainTodoListTitle = styled.p`
  margin-left:  ${(p) => p.theme.margin.default};
  margin-right:  ${(p) => p.theme.margin.default};
  &.completed {
    text-decoration: line-through;
  }
`
export const MainTodoListIcon = styled.div`
  margin-left:  ${(p) => p.theme.margin.default};
`

export const MainTodoListRow = styled.div`
  display: flex;
  align-items: center;
`

export const MainListRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.theme.padding.small};
  border-bottom: 1px solid ${props => props.theme.colors.lighterMain};
`

export const MainListLeftSide = styled.div`
  display: flex;
  align-items: center;
`
