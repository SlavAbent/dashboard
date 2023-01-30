import styled from 'styled-components'

export const MainTodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:  ${(p) => p.theme.margin.default};
  margin-bottom:  ${(p) => p.theme.margin.default};
`

export const MainTodoListTitle = styled.div`
  margin-left:  ${(p) => p.theme.margin.default};
  margin-right:  ${(p) => p.theme.margin.default};
  color: ${(p) => p.theme.colors.lightTheme.mainColor};
`
export const MainTodoListIcon = styled.div`
  margin-right:  ${(p) => p.theme.margin.default};
  color: ${(p) => p.theme.colors.lightTheme.mainColor};
`