import React, { useContext, useMemo } from 'react'
import { useLocation } from 'react-router'
import { ListContext } from '../../../../context/providers/listProvider'

export const EditPage = () => {
  const { response } = useContext(ListContext)
  const location = useLocation();

  const data = useMemo(() => response.map((item) => {
    const { id, name } = item
    return (
      <>
        { location.pathname === `/Edit/${id}` ? (
         <p>{name}</p>
        ) : null }
      </>
    )
  }), [response, location])
  return <div>{data}</div>
}
