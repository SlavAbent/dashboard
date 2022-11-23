import React, { DOMAttributes } from 'react';
import { ReactComponent as Icons } from 'assets/Person/male.svg';
import classNames from 'classnames';
import { newGuid } from '../../../utils/guid'

export type IconType = | 'svg'

const iconTypes = new Map([
    ["svg", <Icons key={newGuid()}/>]
])

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
    className?: string
    type: IconType
    color?: string
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element

export const Icon: React.FC<IIconProps> = ({className, type, ...rest}) => {
    return (
        <div className={classNames('Icon', className)}{...rest}>
            {getIcon(type)}
        </div>
    );
}
