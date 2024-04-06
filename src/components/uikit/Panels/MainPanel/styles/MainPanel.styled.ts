import styled from "styled-components";

export const MainPanelWrapper = styled.div`
  min-width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.decoration.borderRadius.large};
  margin-right: 10px;
  padding-right: 5px;
  border-radius: ${props => props.theme.padding.default};
  box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  background-color: ${(props) => props.color === "light" ? props.theme.colors.lightTheme.mainColor : props.theme.colors.darkTheme.grey_dark};
`;

export const MainPaneColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainPanelWrap = styled.div``;
export const MainPanelText = styled.p`
  display: none;
`;
