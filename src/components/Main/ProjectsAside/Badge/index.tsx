import React, { ReactNode } from 'react'
import classNames from 'classnames';
import { BadgeWrapper } from './Badge.style'


interface  IProps {
  onClick?: () => void
  color?: string
  className?: string | boolean
}

const Badge = ({ color, onClick, className }: IProps) => {
  return (
      <BadgeWrapper
        onClick={onClick}
        className={classNames('', color, className)}
      />
  )
};

export default Badge;