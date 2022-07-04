import { AvatarBorder, AvatarBorderBox, AvatarButton, AvatarFace, AvatarImage, AvatarWrapper } from './Avatar.style'

import React from 'react'

interface IAvatarProps {
    className: string
    size?: number
    image?: string
    title?: string

}

export const Avatar: React.FC<IAvatarProps> = (props) => {
    const { size = 42, image, className, title } = props

    const sizeBox = `${size - 4}px`
    const sizeInner = `${size - 8}px`
    const sizeWrapper = `${size}px`
    const sizeTitle = `${size / 2}`

    return (
        <AvatarButton
            className={className}
            style={{width: sizeInner, height: sizeInner}}>
            <AvatarWrapper 
                style={{width: sizeInner, height: sizeInner}}>
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