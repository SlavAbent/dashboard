import React, { useContext } from 'react'

import { BsChatDots, BsListCheck, BsMap } from 'react-icons/bs'
import { IoIosQrScanner, IoIosKeypad, IoIosContact } from "react-icons/io";

import { LinksContainer, LinkAnchor, LinkAnchorTitle } from './Links.style'
import { ThemeContext } from '../components/ThemeContainer/context/ThemeContext'
import { uniqueId } from 'lodash'
import { useSelector } from 'react-redux'

interface LinkData {
  to: string,
  icon: React.ReactElement
  name: string
}

const menu: LinkData[] = [
  {
    to: '/',
    icon: <IoIosKeypad/>,
    name: 'Главная',
  },
  {
    to: 'List',
    icon: <BsListCheck/>,
    name: 'Дашборд',
  },
  {
    to: 'UI',
    icon: <IoIosQrScanner/>,
    name: 'UI',
  },
  {
    to: 'Chat',
    icon: <BsChatDots/>,
    name: 'Чат',
  },
  {
    to: 'Profile',
    icon: <IoIosContact/>,
    name: 'Профиль',
  },
  {
    to: 'Map',
    icon: <BsMap/>,
    name: 'Карта',
  },
]

export const Links = () => {
  // @ts-ignore
  const isOpenMenu = useSelector((state) => state.isOpenMenu)

  const { toggleTheme } = useContext(ThemeContext)
  const className = ({isActive}) => isActive ? ' active' : ''
  const openMenu = isOpenMenu ? 'link__active' : ''
  return  (
    <LinksContainer>
      { menu.map((link) => {
        const { to, icon, name } = link
        return (
          <LinkAnchor
            key={uniqueId('link_')}
            to={`${to}`}
            color={toggleTheme}
            className={`${className} ${openMenu}` }
          >
            <span className={openMenu}>{icon}</span>
            <LinkAnchorTitle
              className={openMenu}
            >
              {name}
            </LinkAnchorTitle>
          </LinkAnchor>
        )
      })}
    </LinksContainer>
  )
}
