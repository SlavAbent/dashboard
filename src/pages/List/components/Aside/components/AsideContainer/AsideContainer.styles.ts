import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const AsideRow = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`

export const AsideContain = styled.div`
`

export const AsideRowEdit = styled.div`
  margin-right:${(p) => p.theme.margin.small};
`

export const AsideRowText = styled.p`
  display: flex;
  flex-grow: 1;
`

export const AsideRowWrapper = styled.div`
  a:hover {
    background-color: ${props => props.theme.colors.lightTheme.mainColorDarked};
    border-radius: ${props => props.theme.decoration.borderRadius.default};
  }
`
export const AsideNavLink = styled(NavLink)`
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  transition: .3s;
  &.active {
    display: flex;
    background-color: ${props => props.theme.colors.lighterMain};
    p {
      color: ${(props) => props.color === 'light'
              ? props.theme.colors?.lightTheme.mainColor
              : props.theme.colors?.darkTheme.mainColor
      };
    }
    svg {
      color: ${(props) => props.color === 'light'
              ? props.theme.colors?.darkTheme.mainColor
              : props.theme.colors?.lightTheme.mainColor
      };
    }
  }
  div:hover {
    background-color: ${(props) => props.color === 'light'
            ? props.theme.colors?.lightTheme.mainColor
            : props.theme.colors?.darkTheme.mainColor
    };
    border-radius: ${props => props.theme.decoration.borderRadius.default};
    p {
      color: ${(props) => props.color === 'light'
              ? props.theme.colors?.darkTheme.mainColor
              : props.theme.colors?.lightTheme.mainColor
      };
    }
    svg {
      color: ${(props) => props.color === 'light'
              ? props.theme.colors?.darkTheme.mainColor
              : props.theme.colors?.lightTheme.mainColor
      };
    }
  }
`
