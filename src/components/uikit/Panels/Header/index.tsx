import React, { FC, ReactNode, useContext, useState } from 'react'
import { HeaderComponent, HeaderSearch, HeaderTitle, CustomAvatarHeader } from './styles/Header.styled'
import { TimeDate } from '../../Time/Time'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch } from '../../../../redux/hooks/useAppDispatch'
import { ThemeContext } from '../../../../context/themeContext'
import { togglePanels } from '../../../../redux/reducers/panels.slice'
import { Avatar } from '../../../../stories/UI/Components/Avatar'
import defaultAvatar from '../../../../assets/avatar.jpeg'
import { DropDownMenu } from '../../../../stories/UI/Components/DropDownMenu'
import { Link } from 'react-router-dom'
import { Logo } from '../../../Icons/Logo'
import { Home } from '../../../Icons/Home'
import { useToggleBlock } from '../../../../hooks/useToggleBlock'

export interface IHeaderComponent{
  logo?: ReactNode
  title?: ReactNode
  date?: ReactNode
  search?: boolean
  content?: ReactNode
  avatar?: ReactNode
  color?: string
}

export const Header:FC<IHeaderComponent> = (props) => {
  const { title, date, search, content, color, avatar, logo } = props
  const [activeDropDown, setActiveDropDown] = useState(false)
  const dispatch = useAppDispatch()

  const { toggleTheme } = useContext(ThemeContext)
  // const { activeDropDown, setActiveDropDown } = useToggleBlock()
  const handleToggleMenu = () => dispatch(togglePanels())
  const avatarDropDownMenu = () => setActiveDropDown((activeDropDown) => !activeDropDown )

  const avatarContent = (
    <Avatar
      size={32}
      image={defaultAvatar}
      onClick={avatarDropDownMenu}
    />
  )

  const headerContent = (
    <DropDownMenu
      width={104}
      activeDropDown={activeDropDown} // refactor!
      direction={'bottomToRight'}
      transitioned={true}
      header={'123'}
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
    <HeaderComponent color={toggleTheme ?? color}>
      { logo && logoContent }
      <HeaderTitle>{title && `Welcome back, ${person}` }</HeaderTitle>
      { date && <TimeDate />}
      { search && <HeaderSearch><AiOutlineSearch/></HeaderSearch> }
      <CustomAvatarHeader>
        { avatar && avatarContent }
        { content && headerContent }
      </CustomAvatarHeader>
    </HeaderComponent>
  )
}
