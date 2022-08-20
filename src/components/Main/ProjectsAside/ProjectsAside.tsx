import React from 'react'

import {
  ProjectsAsideContainer,
  AsideThemeProject,
  DarkTheme,
  LightTheme,
  ProjectsAsideWrapper,
  ProjectsAsideTitle,
} from './ProjectsAside.style'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export const ProjectsAside = () => {
  return (
    <ProjectsAsideContainer>
      <ProjectsAsideWrapper>
        <ProjectsAsideTitle>Projects</ProjectsAsideTitle>
        <AiOutlinePlusCircle/>
      </ProjectsAsideWrapper>
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
    </ProjectsAsideContainer>
  )
}