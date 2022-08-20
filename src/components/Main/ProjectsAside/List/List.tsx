import React from 'react'

import {
  ListWrapper,
  ListWrap,
  ListWrapColor,
  ListWrapName,
  ListWrapDelete,
} from './List.style'

const ListComponent = ({ items }) => {
  return (
    <ListWrapper>
      {
        items.lists.map((item, key) => {
          return (
            <ListWrap key={item.id}>
              <ListWrapColor>{item.colorId}</ListWrapColor>
              <ListWrapName>{item.name}</ListWrapName>
              <ListWrapDelete>x</ListWrapDelete>
            </ListWrap>
          )
        })
      }
    </ListWrapper>
  )
}

export default ListComponent