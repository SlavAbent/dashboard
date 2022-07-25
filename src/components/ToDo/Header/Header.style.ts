import styled from 'styled-components'

const HeaderWrapper = styled.div`
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
  }
`;

const HeaderFilter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 5px;
  }
`;

const HeaderSort = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 15px;
  p {
    margin-left: 5px;
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