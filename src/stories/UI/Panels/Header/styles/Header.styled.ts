import styled from "styled-components/macro";

export const HeaderComponent = styled.div<{color: string | undefined}>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    min-height: 60px;
    transition: .3s;
    padding: ${props => props.theme.padding.default};
    box-shadow: ${props => props.theme.decoration.boxShadow.panel};
    border-radius: ${p => p.theme.decoration.borderRadius.large};
    background-color: ${(props) => props.color === "light" 
		? props.theme.colors?.lightTheme.mainColor 
		: props.theme.colors?.darkTheme.mainColor
};

    svg {
        color: ${(props) => props.color === "light"
		? props.theme.colors?.darkTheme.mainColor
		: props.theme.colors?.lightTheme.mainColor
}
    }
    p {
        color: ${(props) => props.color === "light"
		? props.theme.colors?.darkTheme.mainColor
		: props.theme.colors?.lightTheme.mainColor
}
    }
`;

export const HeaderTitle = styled.p`
  display: flex;
  flex-grow: 1;
`;

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  cursor: pointer;
  transition: .3s;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CustomAvatarHeader = styled.div`
  position: relative;
`;

export const HeaderTogglerMenu = styled.div`
    display: flex;
    align-items: center;
`;
export const HeaderDate = styled.div``;
export const HeaderSearchComponent = styled.div``;
export const HeaderAvatar = styled.div``;
export const HeaderContent = styled.div``;
