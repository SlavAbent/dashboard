import React from 'react'
import {
    AvatarBorder,
    AvatarBorderBox,
    AvatarButton,
    AvatarFace,
    AvatarImage,
    AvatarStatus,
    AvatarWrapper
} from './styles/Avatar.style'

import { IAvatarProps } from './model/Avatar.model'
import defaultAvatar from '../../../../../assets/avatar.jpeg'


export const Avatar: React.FC<IAvatarProps> = (props) => {
    const {
      size = 32,
      image = defaultAvatar as string,
      className,
      title,
      status = 'success',
      onClick
    } = props

    const sizeBox = `${size - 4}px`
    const sizeInner = `${size - 8}px`
    const sizeWrapper = `${size}px`
    const sizeTitle = `${size / 2}`

    return (
        <AvatarButton
            className={className}
            onClick={onClick}
            style={{width: sizeInner, height: sizeInner}}>
            <AvatarWrapper
                style={{width: sizeInner, height: sizeInner}}>
                {status && <AvatarStatus className={status}/> }
                {image && (
                    <AvatarImage
                        src={image}
                        alt={title}
                        width={sizeInner}
                        height={sizeInner}
                    />
                )}
                {title && (
                    <AvatarFace
                        style={{fontSize: sizeTitle}}
                    >
                        {title}
                    </AvatarFace>
                )}
            </AvatarWrapper>
            <AvatarBorder
                style={{width: sizeWrapper, height: sizeWrapper}}>
                <AvatarBorderBox style={{width: sizeBox, height: sizeBox}} />
            </AvatarBorder>
        </AvatarButton>
    )
}
