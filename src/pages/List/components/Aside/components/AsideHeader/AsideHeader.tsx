import React from 'react'
import { AsideHeaderWrapper, AsideHeaderText } from './AsideHeader.styled'

export const AsideHeader = ({data}) => {
  return (
    <AsideHeaderWrapper>
      <AsideHeaderText>Всего списков: {data.length}</AsideHeaderText>
    </AsideHeaderWrapper>
  )
}
