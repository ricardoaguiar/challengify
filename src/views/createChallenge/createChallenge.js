import React, {useState} from 'react'

import {
  Columns,
  Gap,
  InputField,
  View,
  RadioButtonGroup
} from '../../components/components'

import {getTodaysDate} from './createChallenge.utility'

const CreateChallenge = () => {
  const [title, onSetTitle] = useState('')
  const [startDate, onSetStartDate] = useState(getTodaysDate())
  const [endDate, onSetEndDate] = useState('')
  return (
    <View
      title='Create new challenge'
      actions={{
        left: {
          to: '..',
          text: 'Back'
        }
      }}
    >
      <RadioButtonGroup
        options={[
          {label: 'Target', selected: true},
          {label: 'Limit'},
          {label: 'Track'}
        ]}
      />
      <Gap size='big' />
      <InputField
        id='newChallengeTitle'
        label='Title'
        placeholder='e.g. Smoke less'
        value={title}
        onChange={({target: {value}}) => {
          onSetTitle(value)
        }}
      />
      <Gap size='big' />
      <Columns gapSize='big'>
        <div>
          <InputField
            id='newChallengeStartDate'
            label='Start date'
            type='date'
            value={startDate}
            onChange={({target: {value}}) => {
              onSetStartDate(value)
            }}
          />
        </div>
        <div>
          <InputField
            id='newChallengeEndDate'
            label='End date'
            type='date'
            value={endDate}
            onChange={({target: {value}}) => {
              onSetEndDate(value)
            }}
          />
        </div>
      </Columns>
    </View>
  )
}

export default CreateChallenge
