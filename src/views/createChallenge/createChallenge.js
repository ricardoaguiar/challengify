import React, {useState} from 'react'

import {
  Columns,
  Gap,
  InputField,
  View,
  RadioButtonGroup
} from '../../components/components'

import {
  getTodaysDate,
  capitalizeString
} from './createChallenge.utility'

const challengeTypes = {
  target: 'target',
  limit: 'limit',
  track: 'track'
}

const {target, limit, track} = challengeTypes

const getTypeOptions = () => (
  [target, limit, track].map(type => ({
    label: capitalizeString(type),
    value: type
  }))
)

const CreateChallenge = () => {
  const [title, onSetTitle] = useState('')
  const [startDate, onSetStartDate] = useState(getTodaysDate())
  const [endDate, onSetEndDate] = useState('')
  const [type, onSetType] = useState(target)
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
        options={getTypeOptions(type)}
        value={type}
        onChange={onSetType}
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
