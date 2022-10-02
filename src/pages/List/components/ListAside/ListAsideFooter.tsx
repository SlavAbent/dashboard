import React from 'react'
import { AsideThemeProject, DarkTheme, LightTheme } from './ListAside.styled'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export const ListAsideFooter = () => {
  return (
    <AsideThemeProject>
      <DarkTheme className="active">
        <MdDarkMode/>
        <p>Dark</p>
      </DarkTheme>
      <LightTheme>
        <MdLightMode/>
        <p>Light</p>
      </LightTheme>
    </AsideThemeProject>
  )
}
