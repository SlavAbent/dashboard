import styled from 'styled-components'

const ListUl = styled.ul`
  margin-bottom: 30px;
  padding: 0;

  &__add-button {
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }
`;
const ListLi = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 12px 10px 0;
  transition: background-color 0.15s ease-in-out;

  &:hover .list__remove-icon {
    opacity: 0.2;
  }

  & .list__remove-icon {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

`;
const ListIcon = styled.i`
  display: inline-flex;
  margin-right: 8px;
  svg {
    path {
      fill: #7c7c7c;
    }
  }
`;
const ListSpan = styled.span`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  white-space: nowrap;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &.active {
    background: #ffffff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
  }

  .badge {
    position: relative;
    left: 5px;
  }

`;
const ListImage = styled.img``;

export {
  ListUl,
  ListLi,
  ListIcon,
  ListSpan,
  ListImage,
}