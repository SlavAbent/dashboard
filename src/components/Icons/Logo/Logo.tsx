import React, { useContext } from 'react'
import { IconLogo } from './Logo.style'
import { FiCircle } from "react-icons/fi";
import { ThemeContext } from '../../ThemeContainer/context/ThemeContext'

const Logo = ({ handleToggleMenu }) => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <IconLogo color={toggleTheme} onClick={handleToggleMenu}>
      <FiCircle />
    </IconLogo>
  )
}

export default Logo