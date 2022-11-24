import React, { useContext } from 'react'
import { Links } from '../../links/Links'
import Logo from '../Icons/Logo/Logo'
import ThemeContainer from '../ThemeContainer/ThemeContainer'

import { AsideWrapper } from './Aside.styled'
import { ThemeContext } from '../ThemeContainer/context/ThemeContext'

const Aside = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
      <AsideWrapper color={toggleTheme} className={'min__menu'}>
        <Logo />
        <Links />
        <ThemeContainer />
      </AsideWrapper>
  )
}

export default Aside