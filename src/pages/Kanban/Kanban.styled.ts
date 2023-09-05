import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.lightTheme.mainColored};
  min-width: 340px;
  min-height: 100px;
  border-radius: ${(props) => props.theme.decoration.borderRadius.default};
  padding: ${(props) => props.theme.padding.default};
  margin-right: 25px;
`

export const TaskColumnStyles = styled.div`
  margin: ${(props) => props.theme.margin.small};
  display: flex;
  width: 100%;
  min-height: 80vh;
`

export const Title = styled.span`
  color: ${(props) => props.theme.colors.purple};
`
