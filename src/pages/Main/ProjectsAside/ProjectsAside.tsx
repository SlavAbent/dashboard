import React, { useState } from 'react'
import {
  ProjectsAsideContainer,
} from './ProjectsAside.style'
import { ProjectAsideComponent } from './ProjectAsideComponent/ProjectAsideComponent'
import { ListAside } from './ListAside/ListAside'
import { AsideFooter } from './AsideFooter/AsideFooter'

export const ProjectsAside = (props) => {
  const { setInputValue,
    inputValue,
    colors,
    selectColor,
    selectedColor,
    addList,
    isLoading,
    setLists,
    lists,
  } = props
  const [activeDropDown, setActiveDropDown] = useState(false)

  return (
    <ProjectsAsideContainer>
      <ProjectAsideComponent
        activeDropDown={activeDropDown}
        setActiveDropDown={setActiveDropDown}
        setInputValue={setInputValue}
        inputValue={inputValue}
        colors={colors}
        selectColor={selectColor}
        selectedColor={selectedColor}
        addList={addList}
        isLoading={isLoading}
      />
      <ListAside
        setActiveDropDown={setActiveDropDown}
        setLists={setLists}
        lists={lists}
      />
      <AsideFooter/>
    </ProjectsAsideContainer>
  )
}
