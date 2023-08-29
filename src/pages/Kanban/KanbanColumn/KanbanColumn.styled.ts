import styled from 'styled-components'

export const KanbanColumnBoard = styled.div`
  &.board-column {
    position: absolute;
    left: 0;
    right: 0;
    width: 30%;
    margin: 16px;
    background: #f0f0f0;
    border-radius: 6px;
    z-index: 1;
    & .muuri-item-releasing {
      z-index: 2;
    }
    & .muuri-item-dragging {
      z-index: 3;
      cursor: move;
    }
  } 
`
export const KanbanColumnBoardHeader = styled.div`
  &.board-column-header {
    position: relative;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 6px 6px 0 0;
    font-size: 23px;
    cursor: pointer;
    margin-bottom: 5px;
  }
`
