import React, { FC } from 'react'
import { AsidePopup, AsidePopupClose, AsidePopupColors } from './AsideAddList.styled'
import { Close } from '../../../../../../components/Icons/Close'
import { TextInput } from '../../../../../../stories/UI/Inputs/TextInput'
import { IColor } from '../../../../model/index.model'
import classNames from 'classnames'
import { Badge } from '../../../../../../stories/UI/Components/Badge'
import { uniqueId } from 'lodash'

interface AsideDropDownProps {
  onCloseDropDownAside?: () => void
  selectedColor?: number
  setSelectedColor?: (id: number) => void
  asideInputValue?: string
  setAsideInputValue?: (value) => void
  colors?: IColor[]
}

export const AsideDropDown:FC<AsideDropDownProps> = (props) => {
  const {
    onCloseDropDownAside,
    selectedColor,
    setSelectedColor,
    asideInputValue,
    setAsideInputValue,
    colors,
  } = props

  return (
    <AsidePopup>
      <AsidePopupClose onClick={onCloseDropDownAside}>
        <Close size={24} />
      </AsidePopupClose>
      <TextInput
        type="text"
        value={asideInputValue as string}
        placeholder="Название списка"
        onChange={e => setAsideInputValue ? setAsideInputValue(e.target.value) : null}
      />
      <AsidePopupColors>
        { colors && colors.map((item: IColor, index: number) => {
          const { id, name } = item
          const className = classNames('badge--aside', { [`badge--${name}`]: name}, 'badge')
          return (
            <Badge
              id={id}
              selectedColor={selectedColor}
              key={uniqueId(`list_${index}`)}
              className={className}
              size={12}
              onClick={() => setSelectedColor ? setSelectedColor(id) : null}
            >
              {item}
            </Badge>
          )
        })}
      </AsidePopupColors>
    </AsidePopup>
  )
}
