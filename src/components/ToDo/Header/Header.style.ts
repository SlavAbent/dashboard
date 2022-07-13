import styled from 'styled-components'

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.darkTheme.grey_smallDark};
  border-radius: 8px;
`;

const TodoTitle = styled.div`

`;

const TodoCounter = styled.div`

`;

export { HeaderWrapper, TodoTitle, TodoCounter }