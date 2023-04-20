import React from 'react'
import { AsideHeaderWrapper, AsideHeaderText } from './index.styled'

const AsideHeader = ({data}) => {
  return (
    <AsideHeaderWrapper>
      <AsideHeaderText>Всего списков: {data.length}</AsideHeaderText>
    </AsideHeaderWrapper>
  )
}

export default AsideHeader