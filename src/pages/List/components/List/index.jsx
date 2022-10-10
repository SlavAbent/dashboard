import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import removeSvg from '../../../../assets/img/remove.svg';

import Badge from '../Badge';

import {
  ListUl,
  ListLi,
  ListIcon,
  ListSpan,
  ListImage,
} from './List.style'

const List = ({
  items,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  activeItem
}) => {
  const removeList = item => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <ListUl onClick={onClick}>
      {items.map((item, index) => (
        <ListLi
          key={index}
          className={classNames(item.className, {
            active: item.active
              ? item.active
              : activeItem && activeItem.id === item.id
          })}
          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <ListIcon>{item.icon ? item.icon : <Badge color={item.color.name} />}</ListIcon>
          <ListSpan>
            {item.name}
            {item.tasks && ` (${item.tasks.length})`}
          </ListSpan>
          {isRemovable && (
            <ListImage
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => removeList(item)}
            />
          )}
        </ListLi>
      ))}
    </ListUl>
  );
};

export default List;
