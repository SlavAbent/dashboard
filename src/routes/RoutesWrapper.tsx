import { Route, Routes } from 'react-router-dom'

import Chat from '../pages/Chat'
import Main from '../pages/Main'
import List from '../pages/List'
import Profile from '../pages/Profile'
import React from 'react';
import {RoutesComponentLocation } from './RoutesWrapper.style'
import { MainListWrapper } from '../pages/List/components/MainList/MainList.style'

import { Map } from '../pages/Map/Map'

export interface IRoutesWrapper {}

export const RoutesWrapper: React.FC<IRoutesWrapper> = (): JSX.Element => {
    return (
      <RoutesComponentLocation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="List" element={<List />}>
            <Route path=":id" element={<MainListWrapper />} />
          </Route>
          <Route path="Chat" element={<Chat />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
      </RoutesComponentLocation>
    )
}
