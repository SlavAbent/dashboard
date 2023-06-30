import styled from 'styled-components'

export const ButtonComponent = styled.button `
  padding: ${p => p.theme.padding.small};
  cursor: pointer;
  border: none;
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


