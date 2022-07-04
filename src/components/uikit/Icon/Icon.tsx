import React, { DOMAttributes } from 'react';

import classNames from 'classnames';
import { newGuid } from 'utils/guid'

// import { ReactComponent as Male } from 'components/Icons/Person/Male.svg';



export type IconType = | 'svg'

const iconTypes = new Map([
    // ["svg", <Svg key={newGuid()}/>]
])

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
    className?: string
    type: IconType
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element

export const Icon: React.FC<IIconProps> = ({className, type, ...rest}) => {
    return (
        <div className={classNames('Icon', className)}{...rest}>
            {getIcon(type)}
        </div>
    );
}
