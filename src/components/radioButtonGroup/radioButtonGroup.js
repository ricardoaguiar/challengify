import React from 'react'
import classNames from 'classnames'

import './radioButtonGroup.css'

const RadioButtonGroup = ({
  options
}) => (
  <div className='radioButtonGroup'>
    {options.map(({selected, label}) => (
      <button className={classNames({selected})}>
        {label}
      </button>
    ))}
  </div>
)
export default RadioButtonGroup
