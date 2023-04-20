import styled from 'styled-components'

export const AsideWrapper = styled.div`
  width: 300px;
  height: calc(100% - 32px);
  margin: 0 16px 16px 0;
  padding: ${(p) => p.theme.padding.default};
  background-color: ${(p) => p.theme.colors?.lightTheme.mainColorOpacity};
`
