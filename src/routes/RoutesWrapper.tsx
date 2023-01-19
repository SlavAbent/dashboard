import { Route, Routes } from 'react-router-dom'

import Chat from '../pages/Chat'
import Main from '../pages/Main'
import List from '../pages/List'
import Profile from '../pages/Profile'
import React from 'react';
import {RoutesComponentLocation } from './RoutesWrapper.style'
import UI from '../pages/UI'
import MainList from '../pages/List/components/MainList'

// import Map from '../pages/Map/Map'

export interface IRoutesWrapper {}

export const RoutesWrapper: React.FC<IRoutesWrapper> = (): JSX.Element => {
    return (
      <RoutesComponentLocation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="List" element={<List />}>

          </Route>
          <Route path="UI" element={<UI />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="Profile" element={<Profile />} />
          {/* <Route exact  path="/Map" element={<Map />} /> */}

          <Route path={"List/Chapter/:id"} element={<MainList />} />
        </Routes>
      </RoutesComponentLocation>
    )
}
