import React from 'react'
import classNames from 'classnames'

import './gap.css'

const Gap = ({
  size = 'medium',
  direction = 'vertical',
  className,
  ...props
}) => (
  <div
    className={classNames('gap', className, {
      small: size === 'small',
      medium: size === 'medium',
      big: size === 'big',
      vertical: direction === 'vertical',
      horizontal: direction === 'horizontal'
    })}
    {...props}
  />
)

export default Gap
