import React from 'react'
import { LoaderWrapper, LoaderTitle } from './Loader.style'
import { BiLoaderCircle } from 'react-icons/bi'

interface ILoader {
  size: number
  title?: string
  color?: string
  className?: string
}

export const Loader: React.FC<ILoader> = (props) => {
  const {size = 70, title, color, className} = props

  return (
    <LoaderWrapper
      className={className}
    >
      <BiLoaderCircle
        size={size}
        color={color}
      />
      <LoaderTitle style={{color}}>{title}</LoaderTitle>
    </LoaderWrapper>
  )
}