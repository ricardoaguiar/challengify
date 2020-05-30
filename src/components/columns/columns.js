import React from 'react'
import classNames from 'classnames'

import './columns.css'

const Columns = ({
  gapSize = 'medium',
  className,
  children,
  ...props
}) => (
  <div
    className={classNames(
      'columns',
      className,
      {
        gapSizeSmall: gapSize === 'small',
        gapSizeMedium: gapSize === 'medium',
        gapSizeBig: gapSize === 'big'
      }
    )}
    {...props}
  >
    {children}
  </div>
)
export default Columns
