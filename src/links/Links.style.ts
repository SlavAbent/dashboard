import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
`;

const LinkAnchor = styled(NavLink)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: inherit;
    transition: .3s;
  
    svg {
        width: 25px;
        height: 25px;
        color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor}
    }
  
    &.active {
      background-color: ${props => props.theme.colors.purple};
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      position: relative;
      left: 1px;
      box-shadow: ${props => props.theme.decoration.boxShadow.purple};
    }
`;

export { LinksContainer,  LinkAnchor }