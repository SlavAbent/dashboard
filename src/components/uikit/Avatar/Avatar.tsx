import {
    AvatarBorder,
    AvatarBorderBox,
    AvatarButton,
    AvatarFace,
    AvatarImage,
    AvatarStatus,
    AvatarWrapper
} from './Avatar.style'

import React from 'react'

export type statusType = 'success' | 'warning' | 'error'

interface IAvatarProps {
    className?: string
    size?: number
    image?: string
    title?: string
    status?: statusType
    onClick?: (event: React.MouseEvent) => void 
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
    const { size = 42, image, className, title, status, onClick } = props

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