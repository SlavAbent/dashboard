import styled from "styled-components/macro";

export const MainListWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${p => p.theme.margin.default};
  margin-bottom: ${p => p.theme.margin.default};
  box-shadow: ${p => p.theme.decoration.boxShadow.panel};
  border-radius: ${p => p.theme.decoration.borderRadius.large};
  padding: ${p => p.theme.padding.default};
  background-color: ${p => p.color === "light"
		? p.theme.colors?.lightTheme.mainColor
		: p.theme.colors?.darkTheme.mainColor
};
`;
export const MainListWrapperTest = styled.div`

  background-color: ${p => p.color === "light"
		? p.theme.colors?.lightTheme.mainColor
		: p.theme.colors?.darkTheme.mainColor
};
`;

export const MainListContainer = styled.div`
  width: 800px;
  margin-left: ${(p) => p.theme.margin.default};
`;
