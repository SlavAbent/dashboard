import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
`;

export const LinkAnchor = styled(NavLink)<{showNameLink: boolean}>`
    display: flex;
    align-items: center;
    justify-content: ${(p) => p.showNameLink ? 'flex-start' : 'center'};
    width: 100%;
    height: 100%;
    padding-top: ${props => props.theme.padding.small};
    padding-bottom: ${props => props.theme.padding.small};
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

export const LinkAnchorTitle = styled.p<{showNameLink: boolean}>`
  margin-left: ${(p) => p.theme.padding.small};
  text-decoration: none;
  display: ${(p) => p.showNameLink ? 'block' : 'none'};
  transition: .3s;
`
