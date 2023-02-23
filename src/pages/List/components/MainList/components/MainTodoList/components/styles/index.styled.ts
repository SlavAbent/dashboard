import styled from 'styled-components'

export const MainTodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:  ${(p) => p.theme.margin.default};
  margin-bottom:  ${(p) => p.theme.margin.default};
`

export const MainTodoListTitle = styled.p`
  margin-left:  ${(p) => p.theme.margin.default};
  margin-right:  ${(p) => p.theme.margin.default};
  &.completed {
    text-decoration: line-through;
  }
`
export const MainTodoListIcon = styled.div`
  margin-right:  ${(p) => p.theme.margin.default};
`
