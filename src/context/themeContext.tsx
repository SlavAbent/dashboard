import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  NIGHT = 'night',
}

export interface ThemeContextProps {
  toggleTheme?: Theme,
  setToggleTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})