import styled from 'styled-components'


export const AddListWrapper = styled.div`
  display: block;
`

export const AddListPopup = styled.div`
    height: 150px;
    width: 240px;
    background: #ffffff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 18px;
    box-sizing: border-box;
    position: relative;
    top: -25px;
    left: 10px;
`

export const AddListCloseBtn = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  cursor: pointer;
`

export const AddListButton = styled.button`
  width: 100%;
  margin-top: 12px;
`

export const AddListPopupColors = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  .badge {
    width: 16px;
    height: 16px;
    cursor: pointer;
    border: 2px solid transparent;

    &.active {
      border: 2px solid #525252;
    }
  }
`