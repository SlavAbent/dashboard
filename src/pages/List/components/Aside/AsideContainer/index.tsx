import React, { useMemo } from 'react'
import { useAxios } from 'hooks/useAxios'
import { uniqueId } from 'lodash'

export interface IList {
  id: number
  name: string,
  colorId: number
}

const AsideContainer = () => {
  const { response, error, loading } = useAxios({
    url: '/lists',
    method: 'GET',
  })

  const data = useMemo(() => {
    if(Array.isArray(response)) {
      return response.map((list: IList) => {
       return (
         <div key={uniqueId('list')}>
           {/*<Badge></Badge>*/}
           <div>{list?.name}</div>
         </div>
       )
      })
    }

  }, [response])

  return (
    <>
      {data}
    </>
  )
}

export default AsideContainer