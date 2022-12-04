import React from 'react'
import { AsideWrapper } from './Aside.style'
import AsideHeader from './AsideHeader'
import AsideContainer from './AsideContainer'
import AsideAddList from './AsideAddList'

const Aside = () => {
  return (
    <AsideWrapper>
      <AsideHeader />
      <AsideContainer />
      <AsideAddList />
    </AsideWrapper>
  )
}

export default Aside