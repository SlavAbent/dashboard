import React, { useContext } from 'react'

import { BsChatDots, BsListCheck, BsMap } from 'react-icons/bs'
import { IoIosQrScanner, IoIosKeypad, IoIosContact } from "react-icons/io";

import { LinksContainer, LinkAnchor } from './Links.style'
import { ThemeContext } from '../components/ThemeContainer/context/ThemeContext'
import { uniqueId } from 'lodash'

interface LinkData {
  to: string,
  icon: React.ReactElement
}

const menu: LinkData[] = [
  {
    to: '/',
    icon: <IoIosKeypad/>
  },
  {
    to: '/List',
    icon: <BsListCheck/>
  },
  {
    to: 'UI',
    icon: <IoIosQrScanner/>
  },
  {
    to: 'Chat',
    icon: <BsChatDots/>
  },
  {
    to: 'Profile',
    icon: <IoIosContact/>
  },
  {
    to: 'Map',
    icon: <BsMap/>
  },
]

export const Links = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const className = ({isActive}) => isActive ? ' active' : ''
  return  (
    <LinksContainer>
      { menu.map((link) => {
        const { to, icon } = link
        return (
          <LinkAnchor
            key={uniqueId('link_')}
            to={`${to}`}
            color={toggleTheme}
            className={className}
          >{icon}
          </LinkAnchor>
        )
      })}
    </LinksContainer>
  )
}
