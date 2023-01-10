import React from 'react'
import { AsideWrapper } from './Aside.style'
import AsideHeader from './AsideHeader'
import AsideContainer from './AsideContainer'
import AsideAddList from './AsideAddList'
import { useAxios } from '../../../../hooks/useAxios'
import { useAddedList } from './hooks/useAddedList'
import { baseURL } from '../../../../utils/urls'

const Aside = () => {
  const { deleteListOnAside } = useAddedList()
  const { response , error, loading, setResponse } = useAxios({
    url: '/lists?_expand=color&_embed=tasks',
    method: 'GET',
  })

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
      deleteListOnAside(baseURL, item.id).then(() => onRemove(item.id))
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