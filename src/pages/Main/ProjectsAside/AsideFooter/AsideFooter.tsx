import React from 'react'
import { AsideThemeProject, DarkTheme, LightTheme } from '../ProjectsAside.style'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export const AsideFooter = () => {
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
