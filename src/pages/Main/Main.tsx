import React from 'react'
import { ToDo } from './ToDo'

interface MainI {
  lists: any[]
}

export const Main = ({lists}: MainI) => <ToDo lists={lists} />
