import React, { useContext, useState } from 'react'
import { Avatar } from '../uikit/Avatar'
import avatar from '../../assets/avatar.jpeg'
import { DropDownMenu } from '../uikit/DropDownMenu'
import { Link } from 'react-router-dom'
import { Header } from '../Panels/Header'
import { ThemeContext } from '../ThemeContainer/context/ThemeContext'

export const HeaderComponent = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const { toggleTheme } = useContext(ThemeContext)

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

  const person = 'Slava'
  return (
    <Header
      title={`Welcome back, ${person} 💪`}
      date
      search
      color={toggleTheme}
      avatar={avatarContent}
      content={headerContent}
    />
  )
}
