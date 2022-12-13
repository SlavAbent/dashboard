import React from 'react'
import {AsideHeaderWrapper, AsideHeaderText} from './index.styled'

const AsideHeader = () => {

  const listCount = 7
  return (
    <AsideHeaderWrapper>
      <AsideHeaderText>Всего списков: {listCount}</AsideHeaderText>
    </AsideHeaderWrapper>
  )
}

export default AsideHeader