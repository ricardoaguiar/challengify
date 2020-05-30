import React from 'react'
import classNames from 'classnames'

import './gap.css'

const Gap = ({
  size,
  ...props
}) => (
  <div className={classNames('gap', {
    small: size === 'small',
    medium: size === 'medium',
    big: size === 'big'
  })} />
)
export default Gap
