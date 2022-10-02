import styled from 'styled-components/macro';

const HeaderComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 25px;
    padding: ${props => props.theme.padding.default};
    background-color: ${props => props.theme.colors.darkTheme.grey_darked};
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-grow: 1;
  color: ${props => props.theme.colors.lighterMain}
`;

const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.lighterMain};
  }
`;


export { HeaderComponent, HeaderTitle, HeaderSearch }
