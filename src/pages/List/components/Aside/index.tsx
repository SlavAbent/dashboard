import React, { useContext } from 'react'
import { AsideWrapper } from './Aside.style'
import AsideHeader from './components/AsideHeader'
import AsideContainer from './components/AsideContainer'
import { AsideAddList } from './components/AsideAddList'
import { useAddedList } from '../../../../hooks/useAddedList'
import { baseURL } from '../../../../shared/urls'
import { ListContext } from '../../../../context/providers/listProvider'

const Aside = () => {
  const { deleteListOnAside } = useAddedList()
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
      <AsideHeader data={response}/>
      <AsideContainer
        data={response}
        error={error}
        loading={loading}
        handleAsideDeleteItem={handleAsideDeleteItem}
      />
      <AsideAddList handlerAddList={handlerAddList}/>
    </AsideWrapper>
  )
}

export default Aside
