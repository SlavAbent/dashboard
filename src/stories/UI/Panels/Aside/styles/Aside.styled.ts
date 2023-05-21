import styled from 'styled-components'

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s;
  padding-bottom: ${(props) => props.theme.padding.default};
  box-shadow: ${props => props.theme.decoration.boxShadow.panelWithoutTop};
  background-color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor};
  position: relative;
  z-index: 1000;
  &.min__menu {
    width: 40px;
  }
  &.full__menu {
    width: 300px;
  }
`;

export const AsideGrowedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`
