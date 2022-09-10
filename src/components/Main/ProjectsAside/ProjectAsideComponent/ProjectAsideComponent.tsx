import React from 'react'
import { BadgeContainer, ProjectsAsideTitle, ProjectsAsideWrapper } from '../ProjectsAside.style'
import { DropDownMenu } from '../../../uikit/DropDownMenu'
import Badge from '../Badge'

interface IProjectAsideComponent {
  activeDropDown: boolean
  setActiveDropDown: boolean | any
  setInputValue: string | any
  inputValue: string
  colors: null | any
  selectColor: number | any
  selectedColor: number | any
  addList: () => void
  isLoading: boolean
}

export const ProjectAsideComponent = (props: IProjectAsideComponent) => {
  const {
    activeDropDown,
    setActiveDropDown,
    setInputValue,
    inputValue,
    colors,
    selectColor,
    selectedColor,
    addList,
    isLoading,
  } = props

  return (
    <ProjectsAsideWrapper>
      <ProjectsAsideTitle>Projects</ProjectsAsideTitle>
      { activeDropDown && (
        <DropDownMenu
          width={200}
          activeDropDown={activeDropDown}
        >
          <div onClick={() => setActiveDropDown(false)}>x</div>
          <input
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            className=""
            type="text"
            placeholder="Название списка"
          />
          <BadgeContainer>
            {colors.map(({id, name}) => {
              return (
                <Badge
                  onClick={() => selectColor(id)}
                  key={id}
                  color={name}
                  className={selectedColor === id && 'active'}
                />
              )
            })}
          </BadgeContainer>
          <button onClick={addList}>
            {isLoading ? 'Добавление...' : 'Добавить'}
          </button>
        </DropDownMenu>
      )}
    </ProjectsAsideWrapper>
  )
}
