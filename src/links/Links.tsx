import React, { useContext, useMemo } from 'react'

import { LinksContainer, LinkAnchor, LinkAnchorTitle } from './styles/Links.style'
import { ThemeContext } from '../context/themeContext'
import { uniqueId } from 'lodash'
import { useAppSelector } from '../redux/hooks/useAppSelector'
import { asideLinks } from './data/asideLinks'

export const Links = () => {
  const isOpenMenu = useAppSelector((state) => state.togglePanels.togglePanels)
  const { toggleTheme } = useContext(ThemeContext)
  const className = ({isActive}) => isActive ? ' active' : ''
  const openMenu = isOpenMenu ? 'link__active' : ''

  const memoRoutes = useMemo(() => {
    return (
      <>
        {asideLinks.map((link) => {
          console.log('isOpenMenu', isOpenMenu)
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
              <LinkAnchorTitle showNameLink={isOpenMenu}>
                {name}
              </LinkAnchorTitle>
            </LinkAnchor>
          )
        })}
      </>
    )
  }, []);

  return  (
    <LinksContainer>
      {memoRoutes}
    </LinksContainer>
  )
}
