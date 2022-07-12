import styled from 'styled-components'

const ToDoWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.darkTheme.grey_darked};
  padding: ${props => props.theme.padding.small};
`;

export { ToDoWrapper }