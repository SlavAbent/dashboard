import styled from "styled-components/macro";

export const MainTodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${props => props.theme.decoration.boxShadow.panel};
  border-radius: ${p => p.theme.decoration.borderRadius.default};
  padding: ${p => p.theme.padding.small};
  cursor: pointer;
  margin-bottom: ${props => props.theme.margin.small};
  background-color: ${(p) => p.color === "light"
		? p.theme.colors.lightTheme.mainColor
		: p.theme.colors.darkTheme.mainColor
};

  &:hover {
    background-color: ${(p) => p.color === "light"
		? p.theme.colors?.lightTheme.mainColorOpacity
		: p.theme.colors?.darkTheme.grey_dark
};
    border-radius: ${p => p.theme.decoration.borderRadius.default};
  }
`;

export const MainTodoListTitle = styled.p`
  margin-left:  ${(p) => p.theme.margin.default};
  margin-right:  ${(p) => p.theme.margin.default};
  &.completed {
    text-decoration: line-through;
  }
`;
export const MainTodoListIcon = styled.div`
  margin-left:  ${(p) => p.theme.margin.default};
`;

export const MainTodoListRow = styled.div`
  display: flex;
  align-items: center;
`;

export const MainListRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.theme.padding.small};
`;

export const MainListLeftSide = styled.div`
  display: flex;
  align-items: center;
`;
