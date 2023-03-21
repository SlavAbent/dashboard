import styled from 'styled-components/macro'

// refact to mixins

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
  width: calc(100% - 20px);
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
  transition: .3s;
  p {
    margin-left: 5px;
  }
`;

const HeaderFilter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .3s;
  p {
    margin-left: 5px;
  }
`;

const HeaderSort = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 15px;
  transition: .3s;
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
