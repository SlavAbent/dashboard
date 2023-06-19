import React, { FC } from 'react'
import { AsideProps } from './model/Aside.model'
import ThemeContainer from '../../../../../components/ThemeContainer/ThemeContainer'
import { AsideGrowedContainer, AsideWrapper } from './styles/Aside.styled'

const Aside:FC<AsideProps> = ({
  color = 'light',
  className,
  asideLinksContent,
}) => {
  return (
    <AsideWrapper color={color} className={className}>
      <AsideGrowedContainer>
        { asideLinksContent }
      </AsideGrowedContainer>
      <ThemeContainer />
    </AsideWrapper>
  )
}

export default Aside
