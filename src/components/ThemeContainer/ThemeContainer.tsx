import React from 'react'
import { ThemeWrapper } from './styles/ThemeContainer.styled'
import { BsSun } from 'react-icons/bs'
import { MdOutlineNightlight } from 'react-icons/md'
import { Theme } from '../../context/themeContext'
import { useTheme } from '../../hooks/useTheme'

const ThemeContainer = () => {
  const { toggleTheme, toggleThemeFunc } = useTheme()

  return (
    <ThemeWrapper color={toggleTheme} onClick={toggleThemeFunc}>
      {toggleTheme === Theme.NIGHT ? <MdOutlineNightlight color="#ffffff" /> : <BsSun  color="#000000" />}
    </ThemeWrapper>
  )
}

export default ThemeContainer
