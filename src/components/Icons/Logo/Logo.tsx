import React, { useContext } from 'react'
import { IconLogo } from './Logo.style'
import { FiCircle } from "react-icons/fi";
import { ThemeContext } from '../../ThemeContainer/context/ThemeContext'

const Logo = () => {
  const { toggleTheme } = useContext(ThemeContext)
  // TODO: add toggle menu
    return (
        <IconLogo color={toggleTheme}>
            <FiCircle />
        </IconLogo>
    )
}

export default Logo