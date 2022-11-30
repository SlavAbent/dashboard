import React, { useContext } from 'react'
import { Links } from '../../links/Links'
import Logo from '../Icons/Logo/Logo'
import ThemeContainer from '../ThemeContainer/ThemeContainer'

import { AsideWrapper } from './Aside.styled'
import { ThemeContext } from '../ThemeContainer/context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/actions/panels'

const Aside = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const isOpenMenu = useSelector((state) => state.isOpenMenu)
  const { toggleTheme } = useContext(ThemeContext)

  const className = `${isOpenMenu ? ' full__menu' : ' min__menu'}`

  const handleToggleMenu = () => dispatch(toggleMenu())

  return (
      <AsideWrapper color={toggleTheme} className={className}>
        <Logo handleToggleMenu={handleToggleMenu}/>
        <Links />
        <ThemeContainer />
      </AsideWrapper>
  )
}

export default Aside