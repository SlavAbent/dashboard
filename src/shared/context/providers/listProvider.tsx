import React, { createContext, Dispatch, FC } from 'react'
import { useAxios } from 'shared/hooks/useAxios'
import { IList, IListContextData } from '../../../pages/List/model/index.model'

export interface ListProviderProps {
  children: React.ReactNode
}

const defaultValue = {
  response: [],
  setResponse: () => {},
  loading: true,
  error: '',
}

export const ListContext = createContext<IListContextData>(defaultValue)

export const ListProvider:FC<ListProviderProps> = ({ children }) => {
  const { response, error, loading, setResponse } = useAxios({
    url: '/lists?_expand=color&_embed=tasks',
    method: 'GET',
  })

  return (
    <ListContext.Provider value={{ response, error, loading, setResponse }}>
      {children}
    </ListContext.Provider>
  )
}
