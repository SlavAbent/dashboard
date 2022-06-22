import React from 'react'
import { AvatarWrapper, AvatarImage, AvatarButton, AvatarFace, AvatarBorder, AvatarBorderBox } from './Avatar.style'

interface IAvatarProps {
    className: string
    classNameSmallCircle?: string
    size?: number
    image?: string
    title?: string
    onClick: () => void

}

const Avatar: React.FC<IAvatarProps> = (props) => {
    const { size = 32, image, className, title, classNameSmallCircle } = props

    const sizeBox = `${size - 4}px`
    const sizeInner = `${size - 8}px`
    const sizeWrapper = `${size}px`
    const sizeTitle = `${size / 2}`

    return (
        <AvatarButton
            className={className}
            style={{width: sizeInner, height: sizeInner}}>
            <AvatarWrapper 
                className={classNameSmallCircle}
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
                <AvatarBorder 
                    style={{width: sizeWrapper, height: sizeWrapper}}>
                    <AvatarBorderBox style={{width: sizeBox, height: sizeBox}} />
                </AvatarBorder>
            </AvatarWrapper>
        </AvatarButton>
    )
}

export default Avatar