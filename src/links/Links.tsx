import React, { useContext } from 'react'

import { LinksContainer, LinkAnchor, LinkAnchorTitle } from './Links.style'
import { ThemeContext } from '../context/themeContext'
import { uniqueId } from 'lodash'
import { useAppSelector } from '../redux/hooks/useAppSelector'
import { asideLinks } from './asideLinks'

export const Links = () => {
  const isOpenMenu = useAppSelector((state) => state.togglePanels.togglePanels)
  const { toggleTheme } = useContext(ThemeContext)
  const className = ({isActive}) => isActive ? ' active' : ''
  const openMenu = isOpenMenu ? 'link__active' : ''
  return  (
    <LinksContainer>
      { asideLinks.map((link) => {
        const { to, icon, name } = link
        return (
          <LinkAnchor
            key={uniqueId('link_')}
            to={`${to}`}
            color={toggleTheme}
            className={`${className} ${openMenu}` }
          >
            <span className={openMenu}>{icon}</span>
            <LinkAnchorTitle className={openMenu}>
              {name}
            </LinkAnchorTitle>
          </LinkAnchor>
        )
      })}
    </LinksContainer>
  )
}
