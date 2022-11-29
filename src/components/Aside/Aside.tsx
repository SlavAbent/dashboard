import React, { useContext } from 'react'
import { Links } from '../../links/Links'
import Logo from '../Icons/Logo/Logo'
import ThemeContainer from '../ThemeContainer/ThemeContainer'

import { AsideWrapper } from './Aside.styled'
import { ThemeContext } from '../ThemeContainer/context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleMenuTypes } from '../../redux/types/enums/panels'

const Aside = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const isOpenMenu = useSelector((state) => state.isOpenMenu)
  const { toggleTheme } = useContext(ThemeContext)

  const handleToggleMenu = () => {
    console.log(1)
    dispatch({type: ToggleMenuTypes.TOGGLE_MENU})
  }

  return (
      <AsideWrapper color={toggleTheme} className={`${isOpenMenu ? ' min__menu' : ' full__menu'}`}>
        <Logo handleToggleMenu={handleToggleMenu}/>
        <Links />
        <ThemeContainer />
      </AsideWrapper>
  )
}

export default Aside