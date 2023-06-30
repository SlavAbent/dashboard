import React from 'react'
import { LoaderWrapper, LoaderTitle } from './styles/Loader.styled'
import { BiLoaderCircle } from 'react-icons/bi'
import { ILoader } from './model/Loader.model'


export const Loader: React.FC<ILoader> = (props) => {
  const {size = 70, title, color, className, loading} = props

  return (
    <>
      { loading && (
        <LoaderWrapper className={className}>
          <BiLoaderCircle
            size={size}
            color={color}
          />
          <LoaderTitle style={{color}}>{title}</LoaderTitle>
        </LoaderWrapper>
      )}
    </>
  )
}
