import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { RoutesComponent } from './RoutesWrapper.style'

import Main from '../pages/Main'
import UI from '../pages/UI'
import Chat from '../pages/Chat'
import Profile from '../pages/Profile'
// import Map from '../pages/Map/Map'

export interface IRoutesWrapper {}

export const RoutesWrapper: React.FC<IRoutesWrapper> = (): JSX.Element => {
    return (
        //ts-ignore
        <RoutesComponent>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/UI" element={<UI />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Profile" element={<Profile />} />
                {/* <Route exact  path="/Map" element={<Map />} /> */}
            </Routes>
        </RoutesComponent>
    )
}