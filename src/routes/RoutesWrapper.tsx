import { Route, Routes } from 'react-router-dom'

import Chat from '../pages/Chat'
import Main from '../pages/Main'
import Profile from '../pages/Profile'
import React from 'react';
import { RoutesComponent } from './RoutesWrapper.style'
import UI from '../pages/UI'

// import Map from '../pages/Map/Map'


export const RoutesWrapper = (props): JSX.Element => {
  const {
    onAddTask,
    onEditListTitle,
    onRemoveTask,
    onEditTask,
    onCompleteTask,
    lists,
    activeItem,
    setActiveItem,
  } = props

    return (
        <RoutesComponent>
            <Routes>
                <Route path="/" element={
                  <Main
                    lists={lists}
                    onAddTask={onAddTask}
                    onEditTitle={onEditListTitle}
                    onRemoveTask={onRemoveTask}
                    onEditTask={onEditTask}
                    onCompleteTask={onCompleteTask}
                    withoutEmpty
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                }/>
                <Route path="/UI" element={<UI />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Profile" element={<Profile />} />
                {/* <Route exact  path="/Map" element={<Map />} /> */}
            </Routes>
        </RoutesComponent>
    )
}