import { useContext } from 'react'
import { Theme, ThemeContext } from '../context/themeContext'

export function useTheme() {
  const { toggleTheme, setToggleTheme } = useContext(ThemeContext)

  const toggleThemeFunc = () => {
    const newTheme = toggleTheme === Theme.NIGHT ? Theme.LIGHT : Theme.NIGHT
    if (setToggleTheme) setToggleTheme(newTheme || Theme.AUTO)
    localStorage.setItem("current-theme", JSON.stringify(newTheme));
  }

  return { toggleTheme, toggleThemeFunc }
}
