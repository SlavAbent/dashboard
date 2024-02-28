import styled from 'styled-components'

export const AsideWrapper = styled.div`
  width: 300px;
  margin: ${p => p.theme.margin.default} 0 0 ${p => p.theme.margin.default};
`

export const AsidePanel = styled.div`
  box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  border-radius: ${p => p.theme.decoration.borderRadius.large};
  padding: ${p => p.theme.padding.default};
  background-color: ${(p) => p.color === 'light'
          ? p.theme.colors?.lightTheme.mainColor
          : p.theme.colors?.darkTheme.mainColor
  };
  margin-bottom: ${p => p.theme.margin.default};
`
