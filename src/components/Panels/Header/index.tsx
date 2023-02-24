import React, { FC } from 'react'
import { HeaderComponent, HeaderSearch, HeaderTitle } from './styles/Header.styled'
import { TimeDate } from '../../Time/Time'
import { AiOutlineSearch } from 'react-icons/ai'
import { IHeaderComponent } from '../../Header/model/HeaderCompoennt.model'

export const Header:FC<IHeaderComponent> = (props) => {
  const { title, date, search, content, color, avatar } = props

  return (
    <HeaderComponent color={color}>
      <HeaderTitle>{title}</HeaderTitle>
      { date && <TimeDate />}
      { search && <HeaderSearch><AiOutlineSearch/></HeaderSearch> }
      { avatar }
      { content }
    </HeaderComponent>
  )
}
