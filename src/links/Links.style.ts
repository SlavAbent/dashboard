import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
`;

export const LinkAnchor = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: inherit;
    transition: .3s;
    text-decoration: none;

    span {
      &.link__active {
        padding-left: 20px;
      }
      svg{
        width: 25px;
        height: 25px;
        color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor};
      }
    }
  

  
    &.active {
      display: flex;
      align-items: center;
      background-color: ${props => props.theme.colors.purple};
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      position: relative;
      box-shadow: ${props => props.theme.decoration.boxShadow.purple};
    }

    &.link__active {
      justify-content: flex-start;
    }
`;

export const LinkAnchorTitle = styled.p`
  color: ${(p) => p.theme.colors.lightTheme.mainColor};
  margin-left: ${(p) => p.theme.padding.small};
  text-decoration: none;
  display: none;
  &.link__active {
    display: block;
  }
`
