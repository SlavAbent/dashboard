import React from 'react'
import { HeaderWrapper, TodoTitle, TodoCounter } from './Header.style'

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <p>board view</p>
        <p>add view</p>
        <p>filter</p>
        <p>sort</p>
      </div>
    </HeaderWrapper>
  )
}