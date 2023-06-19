import { Route, Routes } from 'react-router-dom'

import Chat from '../../pages/Chat'
import List from '../../pages/List'
import Profile from '../../pages/Profile'
import React, { FC } from 'react'
import {RoutesComponentLocation } from './RoutesWrapper.style'
import { MainListWrapper } from '../../pages/List/components/MainList/MainList.style'

import { Map } from '../../pages/Map/Map'

export interface IRoutesWrapper {}

export const RoutesWrapper: FC<IRoutesWrapper> = (): JSX.Element => {
    return (
      <RoutesComponentLocation>
        <Routes>
          <Route path="List" element={<List />}>
            <Route path=":id" element={<MainListWrapper />} />
          </Route>
          <Route path="Chat" element={<Chat />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Map" element={<Map />} />
        </Routes>
      </RoutesComponentLocation>
    )
}
