import React, { useContext } from 'react'
import { Links } from '../../../links/Links'
import ThemeContainer from '../../ThemeContainer/ThemeContainer'

import { AsideWrapper, AsideGrowedContainer } from './Aside.styled'
import { ThemeContext } from '../../../context/themeContext'
import { useAppSelector } from '../../../redux/hooks/useAppSelector'

export const Aside = () => {
  const isOpenMenu = useAppSelector((state) => state.togglePanels.togglePanels);
  const { toggleTheme } = useContext(ThemeContext)

  const className = `${isOpenMenu ? ' full__menu' : ' min__menu'}`

  return (
      <AsideWrapper color={toggleTheme} className={className}>
        <AsideGrowedContainer>
          <Links />
        </AsideGrowedContainer>
        <ThemeContainer />
      </AsideWrapper>
  )
}
