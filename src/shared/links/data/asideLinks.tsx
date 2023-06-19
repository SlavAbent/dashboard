import { IoIosContact } from 'react-icons/io'
import { BsChatDots, BsListCheck, BsMap } from 'react-icons/bs'
import React from 'react'

interface LinkData {
  to: string,
  icon: React.ReactElement,
  name: string
}

export const asideLinks: LinkData[] = [
  {
    to: 'List',
    icon: <BsListCheck />,
    name: 'Главная',
  },
  {
    to: 'Chat',
    icon: <BsChatDots />,
    name: 'Чат',
  },
  {
    to: 'Profile',
    icon: <IoIosContact />,
    name: 'Профиль',
  },
  {
    to: 'Map',
    icon: <BsMap />,
    name: 'Карта',
  },
]
