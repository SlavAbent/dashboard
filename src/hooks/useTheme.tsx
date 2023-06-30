import { useContext, useEffect } from 'react'
import { Theme, ThemeContext } from '../context/themeContext'

export function useTheme() {
  const { toggleTheme, setToggleTheme } = useContext(ThemeContext)

  const toggleThemeFunc = () => {
    const newTheme = toggleTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    if (setToggleTheme) setToggleTheme(newTheme || Theme.AUTO)
    localStorage.setItem("current-theme", JSON.stringify(newTheme));
  }

  useEffect(() => {
    const savedCurrentTheme = localStorage.getItem("current-theme");
    const prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedCurrentTheme && ["dark", "light"].includes(savedCurrentTheme)) {
      if (setToggleTheme) {
        setToggleTheme(savedCurrentTheme as Theme)
      }
    } else if (prefersDarkTheme) {
      if (setToggleTheme) {
        setToggleTheme(Theme.DARK)
      }
    }
  }, []);

  return { toggleTheme, toggleThemeFunc }
}
