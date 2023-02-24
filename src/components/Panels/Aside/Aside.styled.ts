import styled from 'styled-components'

export const AsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .3s;
    padding: ${(props) => props.theme.padding.default} 0;
    box-shadow: ${props => props.theme.decoration.boxShadow.panel};
    background-color: ${(props) => props.color === 'night' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor};
    position: relative;
    z-index: 1000;
    &.min__menu {
      width: 60px;
    }
    &.full__menu {
      width: 180px;
    }
`;

export const AsideGrowedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`