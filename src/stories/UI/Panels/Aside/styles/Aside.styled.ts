import styled from "styled-components";

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s;
  padding: ${(props) => props.theme.padding.default};
  box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  background-color: ${(props) => props.color === "light" 
		? props.theme.colors?.lightTheme.mainColor 
		: props.theme.colors?.darkTheme.mainColor
};
  margin-top: ${p => p.theme.margin.default};
  border-radius: ${p => p.theme.decoration.borderRadius.large};
  position: relative;
  z-index: 1000;
  &.min__menu {
    width: 60px;
  }
  &.full__menu {
    width: 300px;
  }
  
  svg {
    fill: ${(props) => props.color === "light" 
		? props.theme.colors?.darkTheme.mainColor 
		: props.theme.colors?.lightTheme.mainColor
}
  }
`;

export const AsideGrowedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;
