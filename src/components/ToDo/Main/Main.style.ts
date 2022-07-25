import styled from 'styled-components'

const MainWrapper = styled.div`
  height: calc(100vh - 130px);
  background-color: ${props => props.theme.colors.darkTheme.grey_smallDark};
`;

export { MainWrapper }