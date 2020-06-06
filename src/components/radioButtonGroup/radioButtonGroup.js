import React from 'react'
import classNames from 'classnames'

import './radioButtonGroup.css'

const RadioButtonGroup = ({
  options,
  onChange,
  value
}) => (
  <div className='radioButtonGroup'>
    {options.map(({
      label, value: optionValue
    }) => {
      const isOptionSelected = (value === optionValue)
      return (
        <button
          key={label}
          className={classNames({
            selected: isOptionSelected
          })}
          onClick={() => {
            if (!isOptionSelected) {
              onChange(optionValue)
            }
          }}
        >
          {label}
        </button>
      )
    })}
  </div>
)

export default RadioButtonGroup
