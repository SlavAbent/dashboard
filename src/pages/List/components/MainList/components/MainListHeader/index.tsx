import React, { useMemo } from 'react'
import {
  MainListHeaderContainer,
  MainListHeaderIcon,
  MainListHeaderName,
  MainListHeaderText
} from './index.style'
import { Edit } from 'components/Icons/Edit/Edit'
import { IList } from '../../../utility/types/index.model'

export const MainListHeader = ({data}) => {
  const content = useMemo(() => {
    return data.map((item: IList) => {
      const {id, name, color, colorId} = item
      return (
        <MainListHeaderName key={`item__${id}_${colorId}_${color}`}>
          <MainListHeaderText style={{color: color.hex}}>
            {name}
          </MainListHeaderText>
          <MainListHeaderIcon style={{color: color.hex}}>
            <Edit />
          </MainListHeaderIcon>
        </MainListHeaderName>
      )
    })
  }, [data])

  return (
    <MainListHeaderContainer>
      { content }
    </MainListHeaderContainer>
  )
}
