import styled from 'styled-components'

const ListWrapper = styled.div`
  padding: 0 15px;
`;

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ListWrapColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:  12px;
  height: 12px;
  border-radius: 50%;
`;
const ListWrapName = styled.div`
  margin-left: 10px;
`;
const ListWrapDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export {
  ListWrapper,
  ListWrap,
  ListWrapColor,
  ListWrapName,
  ListWrapDelete,
}