import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  ProjectsAsideContainer,
} from './ProjectsAside.style'
import { ProjectAsideComponent } from './ProjectAsideComponent/ProjectAsideComponent'
import { ListAside } from './ListAside/ListAside'
import { AsideFooter } from './AsideFooter/AsideFooter'

export const ProjectsAside = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [inputValue, setInputValue] = useState('')

  //Todo refactor any
  const [selectedColor, selectColor] = useState<any>(3)
  const [colors, setColors] = useState<any>(null);
  const [lists, setLists] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id);
    }
  }, [colors]);

  const onAddList = (obj: any) => {
    const newList = [
      ...lists,
      obj
    ]
    setLists(newList)
  }

  const addList = () => {
    if( !inputValue ) {
      alert('Введите название списка!')
      return
    }
    const color = colors.filter(c => c.id === selectedColor)[0].name
    setIsLoading(true)
    axios.post('http://localhost:3001/lists', {
      name: inputValue,
      colorId: selectedColor
    }).then(({data}) => {
      const listObj = {...data, color: { name: color }}
      onAddList(listObj)
    }).finally(() => {
      setIsLoading(false)
    })
  }

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
