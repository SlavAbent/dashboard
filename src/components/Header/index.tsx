import React, { useContext, useState } from 'react'
import { Avatar } from '../uikit/Avatar'
import avatar from '../../assets/avatar.jpeg'
import { DropDownMenu } from '../uikit/DropDownMenu'
import { Link } from 'react-router-dom'
import { Header } from '../Panels/Header'
import { ThemeContext } from '../../context/themeContext'
import Logo from '../Icons/Logo/Logo'
import { togglePanels } from '../../redux/reducers/panels.slice'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'

export const HeaderComponent = () => {
  const dispatch = useAppDispatch()
  const [activeDropDown, setActiveDropDown] = useState(false)
  const { toggleTheme } = useContext(ThemeContext)
  const handleToggleMenu = () => dispatch(togglePanels())
  const avatarDropDownMenu = () => setActiveDropDown((activeDropDown) => !activeDropDown )

  const avatarContent = (
    <Avatar
      size={42}
      image={avatar}
      onClick={avatarDropDownMenu}
    />
  )

  const headerContent = (
    <DropDownMenu
      width={104}
      activeDropDown={activeDropDown} // refactor!
      // direction={'topToLeft'}
      transitioned={true}
    >
      <>
        <Link to="Profile">Profile</Link>
        <Link to="Logout">Logout</Link>
        <Link to="Register">Register</Link>
      </>
    </DropDownMenu>
  )

  const logoContent = (
    <Logo
      size={32}
      onClick={handleToggleMenu}
    />
  )

  const person = 'Slava'
  return (
     <Header
       logo={logoContent}
       title={`Welcome back, ${person} 💪`}
       date
       search
       color={toggleTheme}
       avatar={avatarContent}
       content={headerContent}
     />
  )
}
