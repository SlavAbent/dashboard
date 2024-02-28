import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const LinksContainer = styled.div<{ isOpenMenu: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${p => p.isOpenMenu ? '100%' : 'auto'};
`;

export const LinkAnchor = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.padding.small};
  border-radius: ${p => p.theme.decoration.borderRadius.default};
  transition: .3s;
  text-decoration: none;
  overflow: hidden;
  margin-bottom: ${p => p.theme.margin.default};
  background-color: ${(p) => p.theme.colors?.opacityWhite};
  &:hover {
    background-color: ${(p) => p.theme.colors?.lightTheme.mainColorOpacity};
  }

  span {
    width: 22px;
    height: 22px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &.active {
    position: relative;
    background-color: ${props => props.theme.colors.lighterMain};
    svg {
      fill: ${(props) => props.color === 'light'
        ? props.theme.colors?.lightTheme.mainColor
        : props.theme.colors?.darkTheme.mainColor
      };
    }
    p {
      color: ${(props) => props.color === 'light'
        ? props.theme.colors?.darkTheme.mainColor
        : props.theme.colors?.lightTheme.mainColor
      };
    }
  }
`;

export const LinkAnchorTitle = styled.p`

  text-decoration: none;

  &.show__text-link {
    opacity: 1;
    width: auto;
    transition: .3s;
    margin-left: 10px;
  }

  &.hide__text-link {
    opacity: 0;
    width: 0;
    transition: .3s;
    margin-left: 0;
  }
`
