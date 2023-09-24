import React, { useContext, useMemo } from 'react'

import { LinksContainer, LinkAnchor, LinkAnchorTitle } from './styles/Links.style'
import { ThemeContext } from '../context/themeContext'
import { uniqueId } from 'lodash'
import { useAppSelector } from '../redux/hooks'
import { asideLinks } from './data/asideLinks'

export const Links = () => {
  const isOpenMenu = useAppSelector((state) => state.panelsSlice.togglePanels)
  const { toggleTheme } = useContext(ThemeContext)
  const className = ({ isActive }) => (isActive ? ' active' : '')
  const openMenu = isOpenMenu ? 'link__active' : ''

  const memoRoutes = useMemo(() => {
    return (
      <>
        {asideLinks.map((link) => {
          const { to, icon, name } = link
          return (
            <LinkAnchor
              showNameLink={isOpenMenu}
              key={uniqueId('link_')}
              to={`${to}`}
              color={toggleTheme}
              className={`${className} ${openMenu}`}
            >
              <span className={openMenu}>{icon}</span>
              <LinkAnchorTitle showNameLink={!!isOpenMenu}>{name}</LinkAnchorTitle>
            </LinkAnchor>
          )
        })}
      </>
    )
  }, [isOpenMenu, openMenu, toggleTheme])

  return <LinksContainer>{memoRoutes}</LinksContainer>
}
