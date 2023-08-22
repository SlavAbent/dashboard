import styled, { css } from 'styled-components'

const styledButton = css`
    padding: ${(props) => props.theme.padding.small};
    background-color: ${(props) => props.theme.colors.lightTheme.mainColorDarked};
    color: ${(props) => props.theme.colors.lightTheme.mainColor};
    border-radius: ${(props) => props.theme.decoration.borderRadius.default};
    border: none;
`;

export const AsidePopup = styled.div`
  position: relative;
`
export const AsidePopupClose = styled.div`
  position: absolute;
  top: -15px;
  right: -32px;
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
  margin-bottom: 16px;
`

export const AddListDropDown = styled.div`
  position: relative;
  .button-add {
    ${styledButton}
  }
`
