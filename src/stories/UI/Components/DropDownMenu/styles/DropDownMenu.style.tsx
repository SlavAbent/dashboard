import styled from 'styled-components'

const DropDownMenuWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 53px;
  z-index: 1000;
  background-color: ${props => props.theme.colors.lightTheme.mainColor};
  box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  &.todoDropDown {
    background-color: ${props => props.theme.colors.darkTheme.grey_darked};
    box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  }
  
  &.open {
      opacity: 1;
      visibility: visible;
  }
  &.close {
      opacity: 0;
      visibility: hidden;
  }

  &.topToLeft {
    left: 53px;
    bottom: 53px;
  }
  &.topToRight {
    right: 53px;
    bottom: 53px;
  }
  &.bottomToLeft {
    left: 5px;
    top: 40px;
  }
  &.bottomToRight {
    right: 5px;
    top: 40px;
  }

  &.transitioned {
      transition: .1s ease-in-out;
  }
`
export { DropDownMenuWrapper }