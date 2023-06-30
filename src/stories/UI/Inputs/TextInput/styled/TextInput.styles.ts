import styled from 'styled-components'

export const Input = styled.input`
  width: auto;
  position: relative;
  padding: ${props => props.theme.padding.miniSmall};
  margin-bottom: ${props => props.theme.margin.default};
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  border: 1px solid ${(p) => p.theme.colors.mainColorDark};
  outline: none;
  opacity: .5;
  transition: .3s;
  z-index: 1;
  background-color: ${(p) => p.theme.colors.lightTheme.mainColor};
  &::placeholder {
    transition: .3s;
    color: ${props => props.theme.colors.mainColorDark};
  }
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.mainColorDark};
    opacity: 1;
  }
  
  &.error {
    border-radius: ${props => props.theme.decoration.borderRadius.small};
    border: 1px solid ${props => props.theme.colors.lighterRed};
    &::placeholder {
      color: ${props => props.theme.colors.lighterRed};
    }
  }
`

export const InputLabel = styled.label`
  position: absolute;
  top: 5px;
  z-index: 10;
`
