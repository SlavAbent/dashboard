import React, { useContext } from 'react'
import { Links } from '../../../links/Links'
import Logo from '../../Icons/Logo/Logo'
import ThemeContainer from '../../ThemeContainer/ThemeContainer'

import { AsideWrapper, AsideGrowedContainer } from './Aside.styled'
import { ThemeContext } from '../../ThemeContainer/context/ThemeContext'
import { toggleMenu } from '../../../redux/actions/panels'
import { useAppSelector } from '../../../hooks/redux/useAppSelector'
import { useAppDispatch } from '../../../hooks/redux/useAppDispatch'

const Aside = () => {
  const dispatch = useAppDispatch()
  const isOpenMenu = useAppSelector((state) => state.isOpenMenu)
  const { toggleTheme } = useContext(ThemeContext)

  const className = `${isOpenMenu ? ' full__menu' : ' min__menu'}`
  const handleToggleMenu = () => dispatch(toggleMenu())

  return (
      <AsideWrapper color={toggleTheme} className={className}>
        <AsideGrowedContainer>
          <Logo
            size={32}
            onClick={handleToggleMenu}
          />
          <Links />
        </AsideGrowedContainer>
        <ThemeContainer />
      </AsideWrapper>
  )
}

export default Aside
