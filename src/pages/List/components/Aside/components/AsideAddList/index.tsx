import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DropDownMenu } from 'stories/UI/Components/DropDownMenu'
import { useAxios } from '../../../../../../hooks/useAxios'
import { Badge } from '../../../../../../stories/UI/Components/Badge'
import {
  AsidePopup,
  AsidePopupClose,
  AsidePopupColors,
  AsidePopupInput,
  AddListDropDown,
} from './index.styled'
import classNames from 'classnames'
import { Close } from '../../../../../../components/Icons/Close'
import { Button } from '../../../../../../stories/UI/Components/Button'
import { Loader } from '../../../../../../stories/UI/Components/Loader'
import { uniqueId } from 'lodash'
import { useAddedList } from '../../../../../../hooks/useAddedList'
import { baseURL } from '../../../../../../utils/urls'
import { notificationFabric } from '../../../../../../components/uikit/Notification/notificationFabric'
import { notificationEnum } from '../../../../../../components/uikit/Notification/model/Notification.model'

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
      return notificationFabric({
        className: 'notification__error',
        type: notificationEnum.error,
        icon: <div/>,
        title: 'Ошибка',
        position: 'bottom-right',
      })
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
           const className = classNames('badge--aside', { [`badge--${name}`]: name}, 'badge')
           return (
             <Badge
               // id={id}
               // selectedColor={selectedColor}
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

  const AsideDropDownFooter = useMemo(() => {
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
      { visibleDropDown && (
        <DropDownMenu
          width={200}
          direction={'bottomToLeft'}
          visibleDropdownMenu={visibleDropDown}
          children={AsideDropDownContent}
          footer={AsideDropDownFooter}
        />
      )}
    </AddListDropDown>
  )
}
