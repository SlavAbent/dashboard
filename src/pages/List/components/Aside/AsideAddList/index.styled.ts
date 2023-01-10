import styled from 'styled-components'

export const AsidePopup = styled.div`
  position: relative;
`
export const AsidePopupClose = styled.div`
  position: absolute;
  top: -8px;
  right: 0;
  cursor: pointer;
`
export const AsidePopupInput = styled.input`
  margin-top: ${p => p.theme.margin.default};
  border: 3px solid ${(p) => p.theme.colors.wetAsphalt};
  border-radius: ${(p) => p.theme.decoration.borderRadius.default};
  padding-left: ${(p) => p.theme.padding.default};
  outline: none;
  margin-bottom: ${p => p.theme.margin.default};
  opacity: .5;
  transition: .3s;
  &:focus {
    border: 3px solid ${(p) => p.theme.colors.wetAsphalt};
    opacity: 1;
  }
`
export const AsidePopupColors = styled.div`
  display: flex;
  justify-content: space-between;
`