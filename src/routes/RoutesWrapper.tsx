import { Route, Routes } from 'react-router-dom'

import Chat from '../pages/Chat'
import Main from '../pages/Main'
import Profile from '../pages/Profile'
import React from 'react';
import { RoutesComponent } from './RoutesWrapper.style'
import UI from '../pages/UI'

// import Map from '../pages/Map/Map'

export interface IRoutesWrapper {
  lists: any[]
}

export const RoutesWrapper: React.FC<IRoutesWrapper> = ({lists}): JSX.Element => {
    return (
        <RoutesComponent>
            <Routes>
                <Route path="/" element={<Main lists={lists}/>} />
                <Route path="/UI" element={<UI />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Profile" element={<Profile />} />
                {/* <Route exact  path="/Map" element={<Map />} /> */}
            </Routes>
        </RoutesComponent>
    )
}