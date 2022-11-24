import React from 'react'
import { ThemeWrapper } from './ThemeContainer.styled'
import { BsSun } from 'react-icons/bs'
import { MdOutlineNightlight } from 'react-icons/md'
import { Theme } from './context/ThemeContext'
import { useTheme } from './context/useTheme'

const ThemeContainer = () => {

  const { toggleTheme, toggleThemeFunc } = useTheme()

  return (
    <ThemeWrapper color={toggleTheme} onClick={toggleThemeFunc}>
      {toggleTheme === Theme.NIGHT ? <MdOutlineNightlight /> : <BsSun />}
    </ThemeWrapper>
  )
}

export default ThemeContainer