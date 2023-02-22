import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DropDownMenu } from 'components/uikit/DropDownMenu'
import { useAxios } from '../../../../../hooks/useAxios'
import { Badge } from '../../../../../components/uikit/Badge/Badge'
import {
  AsidePopup,
  AsidePopupClose,
  AsidePopupColors,
  AsidePopupInput,
  AddListDropDown,
} from './index.styled'
import classNames from 'classnames'
import { Close } from '../../../../../components/Icons/Close/Close'
import { Button } from '../../../../../components/uikit/Button'
import { Notification } from '../../../../../components/uikit/Notification/Notification'
import { Loader } from '../../../../../components/uikit/Loader'
import { uniqueId } from 'lodash'
import { useAddedList } from '../../../../../hooks/useAddedList'
import { baseURL } from '../../../../../utils/urls'

export interface IColor {
  hex: string
  id: number
  name: string
}

export const AsideAddList = ({ handlerAddList }) => {
  const [selectedColor, setSelectedColor] = useState(1)
  const [asideInputValue, setAsideInputValue] = useState('')
  const [colors, setColors] = useState<IColor[]>([])
  const [visibleDropDown, setVisibleDropDown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { response, setResponse } = useAxios({
    url: '/colors',
    method: 'GET',
  })

  const { addListOnAside } = useAddedList()

  useEffect(() => {
    if(Array.isArray(response)) {
      setColors(response)
      if(colors && colors.length) setSelectedColor(colors[0].id)
    }
  }, [colors, response])

  const onCloseDropDownAside = useCallback(() => {
    setVisibleDropDown(false)
    setAsideInputValue('')
    setSelectedColor(colors[0].id)
  }, [colors])

  const openDropDown = () => setVisibleDropDown(prev => !prev)

  const handlerAddListAside = useCallback(() => {
    if(!asideInputValue) {
      return (
        <Notification
          title={'Ошибка'}
          position={'top-center'}
          children={'Отсутствует название списка'}
        />
      )
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

  const onRemove = id => {
    const newLists = response.filter(item => item.id !== id)
    setResponse(newLists)
  }

  const AsideDropDownContent = useMemo(() => {
    return (
      <AsidePopup>
        <AsidePopupClose onClick={onCloseDropDownAside}>
          <Close
            size={24}
          />
        </AsidePopupClose>
        <AsidePopupInput
          type="text"
          value={asideInputValue}
          placeholder="Название списка"
          onChange={e => setAsideInputValue(e.target.value)}
        />
        <AsidePopupColors>
          { colors.map((item: IColor, index: number) => {
           const { id, name } = item
           const className = classNames('badge--aside', { [`badge--${name}`]: name}, 'default')
           return (
             <Badge
               key={uniqueId(`list_${index}`)}
               className={className}
               size={16}
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

  const AsideDropDownFooter = useMemo(() => {
    return (
      <Button
        type="button"
        onClick={handlerAddListAside}
      >
        { isLoading ?
          <Loader
            size={20}
            title='loading'
            className={' visibility'}
          /> : <Button
            type={'button'}
            className={'button-add'}
          >Добавить</Button>
        }
      </Button>
    )
  }, [handlerAddListAside, isLoading])

  return (
    <AddListDropDown>
      <Button
        type='button'
        className={'button-dropDown'}
        onClick={openDropDown}
      >Добавить список</Button>
      { visibleDropDown && (
        <DropDownMenu
          width={200}
          direction={'bottomToLeft'}
          transitioned={true}
          children={AsideDropDownContent}
          footer={AsideDropDownFooter}
        />
      )}
    </AddListDropDown>
  )
}
