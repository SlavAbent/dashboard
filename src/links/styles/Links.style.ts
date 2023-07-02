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
  transition: .3s;
  text-decoration: none;
  overflow: hidden;
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

  &.active {
    background-color: ${props => props.theme.colors.lighterMain};
    svg {
      fill: ${(props) => props.color === 'light'
        ? props.theme.colors?.darkTheme.mainColor
        : props.theme.colors?.lightTheme.mainColor
      };
    }
    position: relative;
    p {
      color: ${(props) => props.color === 'light'
              ? props.theme.colors?.darkTheme.mainColor
              : props.theme.colors?.lightTheme.mainColor
      };
    }
  }

`;

export const LinkAnchorTitle = styled.p<{showNameLink: boolean}>`
  margin-left: 10px;
  text-decoration: none;
  transition: .3s;
`
