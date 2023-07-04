import styled from 'styled-components'

export const ButtonComponent = styled.button `
  padding: ${p => p.theme.padding.small};
  border-radius: ${p => p.theme.decoration.borderRadius.default};
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
  &.success {
    background-color: ${p => p.theme.colors.lighterGreen};
    transition: .4s;
    &:hover {
      background-color: ${p => p.theme.colors.green};
    }
  }
  &.warning {
    background-color: ${p => p.theme.colors.lighterYellow};
    transition: .4s;
    &:hover {
      background-color: ${p => p.theme.colors.yellow};
    }
  }
  &.danger {
    background-color: ${p => p.theme.colors.lighterRed};
    transition: .4s;
    &:hover {
      background-color: ${p => p.theme.colors.red};
    }
  }
`

export const ButtonChildren = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonIcon = styled.i<{icon: boolean, iconPosition: string}>`
  width: ${(p) => p.icon ? '18px': '0px'};
  height: ${(p) => p.icon ? '18px' : '0px'};
  margin-right: ${(p) => p.iconPosition === 'left' ? '8px': '0px'};
  margin-left: ${(p) => p.iconPosition === 'left' ? '0px': '8px'};
  order:${(p) => p.iconPosition === 'left' ? '1' : '2'};
`

export const ButtonText = styled.span<{iconPosition: string}>`
  order:${(p) => p.iconPosition === 'left' ? '2' : '1'};
`
