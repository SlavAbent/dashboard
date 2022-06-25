import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { RoutesComponent } from './RoutesWrapper.style'

import Main from '../pages/Main/Main.tsx'
import UI from '../pages/UI/UI.tsx'
import Chat from '../pages/Chat/Chat.tsx'
import Profile from '../pages/Profile/Profile.tsx'
import Map from '../pages/Map/Map'

export const RoutesWrapper = () => {
    return (
        <RoutesComponent>
            <Routes>
                <Route exact  path="/" index element={<Main />} />
                <Route exact  path="/UI" element={<UI />} />
                <Route exact  path="/Chat" element={<Chat />} />
                <Route exact  path="/Profile" element={<Profile />} />
                <Route exact  path="/Map" element={<Map />} />
            </Routes>
        </RoutesComponent>
    )
}