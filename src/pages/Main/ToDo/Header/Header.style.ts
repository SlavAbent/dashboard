import styled from 'styled-components/macro'

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderBoardView = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 5px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
  svg {
    fill: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

const HeaderFilter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 5px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
  svg {
    fill: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

const HeaderSort = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 15px;
  p {
    margin-left: 5px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
  svg {
    fill: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

export {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeftSide,
  HeaderRightSide,
  HeaderBoardView,
  HeaderFilter,
  HeaderSort,
}
