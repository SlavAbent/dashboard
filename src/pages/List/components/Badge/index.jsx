import React from 'react';
import classNames from 'classnames';

import { IBadge } from './Badge.style'

const Badge = ({ color, onClick, className }) => (
  <IBadge
    onClick={onClick}
    className={classNames('badge', { [`badge--${color}`]: color }, className)}
  ></IBadge>
);

export default Badge;
