import React, { useMemo } from 'react'
import { ReactComponent as IconsSVG } from 'assets/Person/male.svg';
import { newGuid } from '../../../../utils/guid'
import { IIconProps, IconType } from './model/Icon.model'
import { CustomIcon } from './styles/Icon.styles'

const iconTypes = new Map([
    ["svg", <IconsSVG key={newGuid()}/>],
])

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element

export const Icon: React.FC<IIconProps> = (
  {
      className,
      size,
      type,
      ...rest
  }) => {
    const sizeWrapper = `${size}px`

  const setSizeIcon = useMemo(() => {
    return {
      width: sizeWrapper,
      height: sizeWrapper,
    }
  }, [])

    return (
        <CustomIcon className={className}{...rest} style={setSizeIcon}>
            {getIcon(type)}
        </CustomIcon>
    );
}
