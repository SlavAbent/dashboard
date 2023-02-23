import styled from 'styled-components/macro';

const HeaderComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 25px;
    transition: .3s;
    padding: ${props => props.theme.padding.default};
    box-shadow: ${props => props.theme.decoration.boxShadow.panel};
    background-color: ${(props) => props.color === 'night' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor};
`;

const HeaderTitle = styled.p`
  display: flex;
  flex-grow: 1;
`;

const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  cursor: pointer;
  transition: .3s;
  svg {
    width: 100%;
    height: 100%;
  }
`;


export { HeaderComponent, HeaderTitle, HeaderSearch }
