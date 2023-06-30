import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { DropDownMenu } from 'stories/UI/Components/DropDownMenu'
import { useAxios } from '../../../../../../hooks/useAxios'
import { Badge } from '../../../../../../stories/UI/Components/Badge'
import {
  AsidePopup,
  AsidePopupClose,
  AsidePopupColors,
  AddListDropDown,
} from './index.styled'
import classNames from 'classnames'
import { Close } from '../../../../../../components/Icons/Close'
import { Button } from '../../../../../../stories/UI/Components/Button'
import { Loader } from '../../../../../../stories/UI/Components/Loader'
import { uniqueId } from 'lodash'
import { useAddedList } from '../../../../../../hooks/useAddedList'
import { baseURL } from '../../../../../../shared/urls'
import { IColor } from '../../../../model/index.model'
import { TextInput } from '../../../../../../stories/UI/Inputs/TextInput'

interface IAsideAddListProps {
  handlerAddList: (listAside) => void
}

export const AsideAddList: FC<IAsideAddListProps> = memo((props) => {
  const { handlerAddList } = props
  const [selectedColor, setSelectedColor] = useState(1)
  const [asideInputValue, setAsideInputValue] = useState('')
  const [colors, setColors] = useState<IColor[]>([])
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { response, setResponse } = useAxios({
    url: '/colors',
    method: 'GET',
  })

  const { addListOnAside } = useAddedList()
  const openDropDown = () => {
    setActiveDropDown(prev => !prev)
  }

  //TODO Fix problem rerender
  // console.log(response)

  const onRemove = (id: number) => {
    const newLists = response.filter((item) => item.id !== id)
    setResponse(newLists)
  }

  useEffect(() => {
    if(Array.isArray(response)) {
      setColors(response)
      // more rerenders
      if(colors && colors.length) setSelectedColor(colors[0].id)
    }
  }, [colors, response])

  const onCloseDropDownAside = useCallback(() => {
    setActiveDropDown(false)
    setAsideInputValue('')
    setSelectedColor(colors[0].id)
  }, [colors])

  const handlerAddListAside = useCallback(() => {
    if(!asideInputValue) {
      return <>notification</>
    }
    setIsLoading(true)
    addListOnAside(baseURL, asideInputValue, selectedColor)
      .then(({ data }) => {
        const color = response.filter((color: IColor) => color.id === selectedColor)[0]
        const listAside = { ...data, color, tasks: [] }
        handlerAddList(listAside)
        onCloseDropDownAside()
        setIsLoading(false);
      })
      .catch(() => {
        alert('Ошибка при добавлении списка!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [
    addListOnAside,
    asideInputValue,
    handlerAddList,
    onCloseDropDownAside,
    response,
    selectedColor
  ])

  const AsideDropDownContent = useMemo(() => {
    return (
      <AsidePopup>
        <AsidePopupClose onClick={onCloseDropDownAside}>
          <Close
            size={24}
          />
        </AsidePopupClose>
        <TextInput
          type="text"
          value={asideInputValue}
          placeholder="Название списка"
          onChange={e => setAsideInputValue(e.target.value)}
          className=""
        />
        <AsidePopupColors>
          { colors.map((item: IColor, index: number) => {
           const { id, name } = item
           const className = classNames('badge--aside', { [`badge--${name}`]: name}, 'badge')
           return (
             <Badge
               id={id}
               selectedColor={selectedColor}
               key={uniqueId(`list_${index}`)}
               className={className}
               size={12}
               onClick={() => setSelectedColor(id)}
             >
               {item}
             </Badge>
           )
          })}
        </AsidePopupColors>
      </AsidePopup>
    )
  }, [asideInputValue, colors, onCloseDropDownAside])

  const asideDropDownFooter = useMemo(() => {
    return (
      <Button
        size="small"
        type="button"
        onClick={handlerAddListAside}
        text="Добавить"
      >
        { isLoading && (
            <Loader
              size={20}
              title='loading'
              className={' visibility'}
            />
        )}
      </Button>
    )
  }, [handlerAddListAside, isLoading])

  return (
    <AddListDropDown>
      <Button
        type='button'
        className={'button-dropDown'}
        onClick={openDropDown}
        size='small'
        text="Добавить список"
      />
      <DropDownMenu
        width={200}
        direction={'bottomToLeft'}
        activeDropDown={activeDropDown}
        footer={asideDropDownFooter}
        >
          { AsideDropDownContent }
        </DropDownMenu>
    </AddListDropDown>
  )
})
