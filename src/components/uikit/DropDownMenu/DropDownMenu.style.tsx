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
  background-color: white;
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
  }
  
  &.open {
      opacity: 1;
      visibility: visible;
  }
  &.close {
      opacity: 0;
      visibility: hidden;
  }
  
  &.bottomToLeft {
    top: auto;
    right: auto;
    left: 53px;
    bottom: 53px;
    opacity: 1;
    visibility: visible;
  }
  &.bottomToRight {
    top: auto;
    left: auto;
    right: 53px;
    bottom: 53px;
    opacity: 1;
    visibility: visible;
  }
  &.topToLeft {
    left: 53px;
    top: 53px;
    bottom: auto;
    right: auto;
    opacity: 1;
    visibility: visible;
  }
  &.topToRight {
    right: 53px;
    top: 53px;
    bottom: auto;
    left: auto;
    opacity: 1;
    visibility: visible;
  }

  &.transitioned {
      transition: .1s ease-in-out;
  }
`

export { DropDownMenuWrapper }