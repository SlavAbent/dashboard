import React from 'react'

import {
  ProjectsAsideContainer,
  ProjectsAsideWrapper,
  ProjectsAsideTitle,
} from './ListAside.styled'
import { ListAsideFooter } from './ListAsideFooter'

const ListAside = () => {
  return (
    <ProjectsAsideContainer>
      <div>
        <ProjectsAsideWrapper>
          <ProjectsAsideTitle>Projects</ProjectsAsideTitle>
        </ProjectsAsideWrapper>
      </div>
      <ListAsideFooter/>
    </ProjectsAsideContainer>
  )
}

export default ListAside
