import styled from 'styled-components'

export const ButtonComponent = styled.button `
  padding: ${p => p.theme.padding.small};
  margin: 16px 0 0 0;
  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.decoration.borderRadius.default};
  position: relative;
  &.small {
    border-radius: ${p => p.theme.decoration.borderRadius.small};
  }
  &.default {
    padding: ${p => p.theme.padding.miniSmall};
  }
  &.large {
    padding: ${p => p.theme.padding.default};
  }
  
`


