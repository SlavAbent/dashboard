import React, { FC, useMemo, useState } from 'react'
import { Theme, ThemeContext } from '../themeContext'

export interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [toggleTheme, setToggleTheme] = useState<Theme>(Theme.LIGHT)

  const defaultTheme = useMemo(() => ({
    toggleTheme: toggleTheme,
    setToggleTheme: setToggleTheme
  }), [toggleTheme])

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
