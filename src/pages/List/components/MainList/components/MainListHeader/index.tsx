import React from 'react'
import {
  MainListHeaderContainer,
  MainListHeaderIcon,
  MainListHeaderName,
  MainListHeaderText
} from './index.style'
import { Edit } from 'components/Icons/Edit/Edit'
export const MainListHeader = ({id, name, color, colorId}) => {

  return (
    <MainListHeaderContainer>
      <MainListHeaderName key={`item__${id}_${colorId}_${color}`}>
        <MainListHeaderText style={{color: color.hex}}>
          {name}
        </MainListHeaderText>
        <MainListHeaderIcon style={{color: color.hex}}>
          <Edit />
        </MainListHeaderIcon>
      </MainListHeaderName>
    </MainListHeaderContainer>
  )
}
