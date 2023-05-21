import React, { FC, useState } from 'react'
import {
  CustomAvatarHeader, HeaderComponent,
  HeaderSearch,
  HeaderTitle
} from './styles/Header.styled'
import { AiOutlineSearch } from 'react-icons/ai'
import { HeaderProps } from './model/Header.model'
import { Avatar } from '../../Components/Avatar'
import defaultAvatar from '../../../../assets/avatar.jpeg'
import { DropDownMenu } from '../../Components/DropDownMenu'
import { Logo } from '../../../../components/Icons/Logo'
import { Time } from '../../Components/Time'

const Header:FC<HeaderProps> = ({
  color,
  title,
  logo,
  date,
  search,
  avatar,
  content,
  personName,
  logoContentBody,
  headerContentBody,
  handleToggleMenu,
}) => {
  const [activeDropDown, setActiveDropDown] = useState(false)

  const avatarContent = (
    <Avatar
      size={32}
      image={defaultAvatar}
      onClick={() => setActiveDropDown((activeDropDown) => !activeDropDown )}
    />
  )

  const headerContent = (
    <DropDownMenu
      width={104}
      activeDropDown={activeDropDown}
      direction={'bottomToRight'}
      header={'header'}
    >
      { headerContentBody }
    </DropDownMenu>
  )

  const logoContent = (
    <>
      <Logo
        size={24}
        onClick={handleToggleMenu}
      />
      { logoContentBody }
    </>
  )

  return (
    <HeaderComponent color={color}>
      { logo && logoContent }
      <HeaderTitle>{title && `Welcome back, ${personName}` }</HeaderTitle>
      { date && <Time
        showTime showIcon
      /> }
      { search && <HeaderSearch><AiOutlineSearch/></HeaderSearch> }
      <CustomAvatarHeader>
        { avatar && avatarContent }
        { content && headerContent }
      </CustomAvatarHeader>
    </HeaderComponent>
  )
}

export default Header
