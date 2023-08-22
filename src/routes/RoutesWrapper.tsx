import { Route, Routes } from 'react-router-dom'

import { Chat } from '../pages/Chat'
import { TodoList } from '../pages/List'
import { Profile } from '../pages/Profile'
import React, { FC } from 'react'
import {RoutesComponentLocation } from './styles/RoutesWrapper.style'
import { MainListWrapper } from '../pages/List/components/MainList/MainList.style'

import { Map } from '../pages/Map'
import { StandartPage } from './StandartPage'
import { route } from '../shared/urls'
import { Kanban } from '../pages/Kanban'

export interface IRoutesWrapper {}

export const RoutesWrapper: FC<IRoutesWrapper> = () => {
    return (
      <RoutesComponentLocation>
        <StandartPage href={route}/>
        <Routes>
          <Route path="Kanban" element={<Kanban />} />
          <Route path="List" element={<TodoList />}>
            <Route path=":id" element={<MainListWrapper />} />
          </Route>
          <Route path="Chat" element={<Chat />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Map" element={<Map />} />
        </Routes>
      </RoutesComponentLocation>
    )
}
