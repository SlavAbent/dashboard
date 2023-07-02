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
`
export const AsideNavLink = styled(NavLink)`
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  &.active {
    display: flex;
    background-color: ${props => props.theme.colors.lighterMain};
    p {
      color: ${(props) => props.color === 'light'
              ? props.theme.colors?.lightTheme.mainColor
              : props.theme.colors?.darkTheme.mainColor
      };
    }
  }
  div:hover {
    background-color: ${props => props.theme.colors.lightTheme.mainColorOpacity};
    border-radius: ${props => props.theme.decoration.borderRadius.default};
  }
`
