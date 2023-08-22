import React, { useCallback, useState } from 'react'
import {
  MainListHeaderContainer,
  MainListHeaderIcon,
  MainListHeaderName,
  MainListHeaderText
} from './MainListHeader.style'
import { Dots } from 'components/Icons/Dots/Dots'
import { DropDownMenu } from '../../../../../../stories/UI/Components/DropDownMenu'
export const MainListHeader = ({id, name, color, colorId}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)

  const handleIsOpenDropDown = useCallback(() => {
    setIsOpenDropDown(prev => !prev)
  }, [])

  const content = (
    <DropDownMenu
      width={104}
      activeDropDown={isOpenDropDown} // refactor!
      // direction={'topToLeft'}
      // transitioned={true}
    >
      <p>редактировать папку</p>
      <p>удалить папку</p>
      <p>добавить раздел</p>
      <p>показать выполненные</p>
      <p></p>
    </DropDownMenu>
  )

  return (
    <MainListHeaderContainer>
      <MainListHeaderName
        key={`item__${id}_${colorId}_${color}`}
        style={{backgroundColor: color.hex}}
      >
        <MainListHeaderText>
          {name}
        </MainListHeaderText>
        <MainListHeaderIcon style={{color: color.hex}}>
          <Dots
            onClick={handleIsOpenDropDown}
          />
          {isOpenDropDown && <>{ content }</> }
        </MainListHeaderIcon>
      </MainListHeaderName>
    </MainListHeaderContainer>
  )
}
