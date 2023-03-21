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
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: inherit;
    transition: .3s;
    text-decoration: none;

    span {
      &.link__active {
        padding-left: 20px;
      }
      svg{
        width: 22px;
        height: 22px;
      }
    }
  
    &.active {
      display: flex;
      align-items: center;
      background-color: ${props => props.theme.colors.lighterMain};
      position: relative;
    }

    &.link__active {
      justify-content: flex-start;
    }
`;

export const LinkAnchorTitle = styled.p`
  margin-left: ${(p) => p.theme.padding.small};
  text-decoration: none;
  display: none;
  &.link__active {
    display: block;
  }
`
