import { useContext } from 'react'
import { Theme, ThemeContext } from '../components/ThemeContainer/context/ThemeContext'

export function useTheme() {
  const { toggleTheme, setToggleTheme } = useContext(ThemeContext)

  const toggleThemeFunc = () => {
    const newTheme = toggleTheme === Theme.NIGHT ? Theme.LIGHT : Theme.NIGHT
    if (setToggleTheme) setToggleTheme(newTheme)
  }

  return { toggleTheme, toggleThemeFunc }
}
