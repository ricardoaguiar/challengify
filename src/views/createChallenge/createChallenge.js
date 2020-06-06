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
  // For Track
  const [initialValue, onSetInitialValue] = useState(0)
  const [trackValue, onSetTrackValue] = useState(0)
  // For Target and Limit
  const [targetLimitValue, onSetTargetLimitValue] = useState(0)
  const [unitSingular, onSetUnitSingular] = useState('')
  const [unitPlural, onSetUnitPlural] = useState('')
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
      <Gap size='big' />
      {(type === track) && (
        <>
          <Columns gapSize='big'>
            <div>
              <InputField
                id='initialValue'
                label={`Initial ${(unitPlural.length > 1) ? unitPlural : 'value'}`}
                type='number'
                value={initialValue}
                onChange={({target: {value}}) => {
                  onSetInitialValue(value)
                }}
              />
            </div>
            <div>
              <InputField
                id='targetValue'
                label={`Target ${(unitPlural.length > 1) ? unitPlural : 'value'}`}
                type='number'
                value={trackValue}
                onChange={({target: {value}}) => {
                  onSetTrackValue(value)
                }}
              />
            </div>
            <div>
              <InputField
                id='unitSingular'
                label='unit (singular)'
                type='text'
                value={unitSingular}
                onChange={({target: {value}}) => {
                  onSetUnitSingular(value)
                }}
                placeholder='E.g. push-up'
              />
              <Gap size='medium' />
              <InputField
                id='unitPlural'
                label='unit (plural)'
                type='text'
                value={unitPlural}
                onChange={({target: {value}}) => {
                  onSetUnitPlural(value)
                }}
                placeholder='E.g. push-ups'
              />
            </div>
          </Columns>
        </>
      )}
      {[target, limit].includes(type) && (
        <Columns>
          <div>
            <InputField
              id='targetValue'
              label={(type === target) ? 'At least' : 'At most'}
              type='number'
              value={targetLimitValue}
              onChange={({target: {value}}) => {
                onSetTargetLimitValue(value)
              }}
            />
          </div>
          <div>
            <InputField
              id='unitSingular'
              label='unit (singular)'
              type='text'
              value={unitSingular}
              onChange={({target: {value}}) => {
                onSetUnitSingular(value)
              }}
            />
            <Gap size='medium' />
            <InputField
              id='unitPlural'
              label='unit (plural)'
              type='text'
              value={unitPlural}
              onChange={({target: {value}}) => {
                onSetUnitPlural(value)
              }}
            />
          </div>
        </Columns>
      )}
    </View>
  )
}

export default CreateChallenge
