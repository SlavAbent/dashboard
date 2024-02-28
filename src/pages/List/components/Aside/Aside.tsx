import React, { useContext } from 'react'
import { AsidePanel, AsideWrapper } from './Aside.style'
import { AsideHeader } from './components/AsideHeader'
import { AsideContainer } from './components/AsideContainer'
import { AsideAddList } from './components/AsideAddList'
import { useAddedList } from '../../../../hooks/useAddedList'
import { baseURL } from '../../../../shared/urls'
import { ListContext } from '../../../../context/providers/listProvider'
import { ThemeContext } from '../../../../context/themeContext'

export const Aside = () => {
  const { deleteListOnAside } = useAddedList()
  const { toggleTheme } = useContext(ThemeContext)
  const { response, error, loading, setResponse } = useContext(ListContext)

  const handlerAddList = listAside => {
    const newListsAside = [...response, listAside]
    setResponse(newListsAside)
  }

  const onRemove = id => {
    const newList = response.filter((item) => item.id !== id)
    setResponse(newList)
  }
  const handleAsideDeleteItem = item => {
    if(window.confirm('Вы точно хотите удалить элемент?')) {
      deleteListOnAside(baseURL, item.id).then(() => {
        onRemove(item.id)
      })
    }
  }

  return (
    <AsideWrapper>
      <AsidePanel color={toggleTheme}>
        <AsideHeader data={response}/>
        <AsideContainer
          themeColor={toggleTheme as string}
          data={response}
          error={error}
          loading={loading}
          handleAsideDeleteItem={handleAsideDeleteItem}
        />
      </AsidePanel>
      <AsideAddList handlerAddList={handlerAddList}/>
    </AsideWrapper>
  )
}
