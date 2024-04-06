import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const AsideRow = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.padding.miniSmall};
  width: 100%;
  box-sizing: border-box;
`;

export const AsideRowWrapper = styled.div`
  margin-bottom: ${p => p.theme.margin.small};
`;

export const AsideRowText = styled.p`
  display: flex;
  flex-grow: 1;
`;

export const AsideNavLinkWrapper = styled.div`
  margin-bottom: ${p => p.theme.margin.small};
  transition: .3s;
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

export const AsideNavLink = styled(NavLink)`
  border-radius: ${p => p.theme.decoration.borderRadius.default};
  transition: .3s;
  &.active {
    display: flex;
    background-color: ${(p) => p.color === "light" 
		? p.theme.colors.lightTheme.mainColorDarked 
		: p.theme.colors.darkTheme.mainColored
};
  }
`;
