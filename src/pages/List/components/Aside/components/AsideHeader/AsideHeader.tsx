import React, { useContext } from 'react'
import { AsideHeaderWrapper, AsideHeaderText } from './AsideHeader.styled'
import { ThemeContext } from '../../../../../../context/themeContext'

export const AsideHeader = ({data}) => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <AsideHeaderWrapper>
      <AsideHeaderText color={toggleTheme}>Всего списков: {data.length}</AsideHeaderText>
    </AsideHeaderWrapper>
  )
}
