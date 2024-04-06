import styled from "styled-components";

const DropDownMenuWrapper = styled.div<{color: string | undefined}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: absolute;
  z-index: 1000;
  background-color: ${props => props.theme.colors.lightTheme.mainColor};
  box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  background-color: ${(props) => props.color === "light"
		? props.theme.colors?.lightTheme.mainColor 
		: props.theme.colors?.darkTheme.mainColor
};

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.color === "light"
		? props.theme.colors?.darkTheme.mainColor
		: props.theme.colors?.lightTheme.mainColor
}
  }
  
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
    opacity: 1;
    visibility: visible;
  }
  &.topToRight {
    right: 53px;
    bottom: 53px;
    opacity: 1;
    visibility: visible;
  }
  &.bottomToLeft {
    left: 0;
    top: 40px;
    opacity: 1;
    visibility: visible;
  }
  &.bottomToRight {
    right: 0;
    top: 40px;
    opacity: 1;
    visibility: visible;
  }

  &.transitioned {
      transition: .1s ease-in-out;
  }
`;
export { DropDownMenuWrapper };
