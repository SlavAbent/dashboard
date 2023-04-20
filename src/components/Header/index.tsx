import React, { useContext, useState } from 'react'
import { Avatar } from '../uikit/Avatar'
import avatar from '../../assets/avatar.jpeg'
import { DropDownMenu } from '../uikit/DropDownMenu'
import { Link } from 'react-router-dom'
import { Header } from '../Panels/Header'
import { ThemeContext } from '../../context/themeContext'
import { togglePanels } from '../../redux/reducers/panels.slice'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import { Logo } from '../Icons/Logo'
import { Home } from '../Icons/Home'

export const HeaderComponent = () => {
  const dispatch = useAppDispatch()
  const [activeDropDown, setActiveDropDown] = useState(false)
  const { toggleTheme } = useContext(ThemeContext)
  const handleToggleMenu = () => dispatch(togglePanels())
  const avatarDropDownMenu = () => setActiveDropDown((activeDropDown) => !activeDropDown )

  const avatarContent = (
    <Avatar
      size={32}
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
    <>
      <Logo
        size={24}
        onClick={handleToggleMenu}
      />
      <Link to="List">
        <Home size={24} />
      </Link>
    </>
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
