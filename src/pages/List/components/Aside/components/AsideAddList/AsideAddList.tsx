import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { DropDownMenu } from 'stories/UI/Components/DropDownMenu'
import { useAxios } from '../../../../../../hooks/useAxios'
import {
  AddListDropDown,
} from './AsideAddList.styled'
import { useAddedList } from '../../../../../../hooks/useAddedList'
import { baseURL } from '../../../../../../shared/urls'
import { IColor } from '../../../../model/index.model'
import { ANTDButton } from '../../../../../../stories/UI/ANTD/Button'
import { AsideDropDown } from './AsideDropDown'

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

  const asideDropDownFooter = useMemo(() => {
    return (
      <ANTDButton
        size="small"
        onClick={handlerAddListAside}
        children={"Добавить"}
        loading={isLoading}
      />
    )
  }, [handlerAddListAside, isLoading])

  return (
    <AddListDropDown>
      <ANTDButton
        type={"primary"}
        className={'button-dropDown'}
        onClick={openDropDown}
        size={'large'}
        children={"Добавить список"}
        textTransform={'lowercase'}
      />
      <DropDownMenu
        width={200}
        direction={'bottomToLeft'}
        activeDropDown={activeDropDown}
        footer={asideDropDownFooter}
        >
          <AsideDropDown
            onCloseDropDownAside={onCloseDropDownAside}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={colors}
            asideInputValue={asideInputValue}
            setAsideInputValue={setAsideInputValue}
          />
        </DropDownMenu>
    </AddListDropDown>
  )
})
