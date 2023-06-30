import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`;

export const LinkAnchor = styled(NavLink)<{showNameLink: boolean}>`
    display: flex;
    align-items: center;
    padding-top: ${props => props.theme.padding.small};
    padding-bottom: ${props => props.theme.padding.small};

    text-decoration: none;
    &:hover {
      background-color: ${(p) => p.theme.colors?.lightTheme.mainColorOpacity};
    }

    span {
      padding-left: ${props => props.theme.padding.small};
      svg {
        width: 22px;
        height: 22px;
      }
    }
  
    p {
      opacity: ${(p) => p.showNameLink ? 1 : 0};
      transition: .3s;
    }
  
    &.active {
      background-color: ${props => props.theme.colors.lighterMain};
      position: relative;
      transition: .3s;
    }
`;

export const LinkAnchorTitle = styled.p<{showNameLink: boolean}>`
  margin-left: ${(p) => p.theme.padding.small};
  text-decoration: none;
  transition: .3s;
`
