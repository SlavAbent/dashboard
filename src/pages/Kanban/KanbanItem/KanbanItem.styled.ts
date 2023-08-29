import styled from 'styled-components'

export const KanbanItemBoard = styled.div`
  &.board-item {
    position: absolute;
    width: 100%;
    padding: 8px 16px;
    &.muuri-item-releasing {
      z-index: 9998;
    }
    &.muuri-item-dragging {
      z-index: 9999;
      cursor: move;
    }
    &.muuri-item-hidden {
      z-index: 0;
    }
  }
`
export const KanbanItemContent = styled.div`
  &.board-item-content {
    position: relative;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    color: #444;
    padding: 8px;
    min-height: 100px;
  }
`

export const KanbanItemTitle = styled.span`
  color: #000000
`

export const KanbanItemDescription = styled.span`
  color: #000000
`
export const KanbanItemTab = styled.div`
  &.tab-item {
    top: 0;
    height: 100%;
    position: absolute;
    right: 0;
    width: 10px;
    border-left: 1px solid #aaa;
    border-radius: 0 4px 4px 0;
  }
`

export const KanbanItemDelete = styled.div`
`
