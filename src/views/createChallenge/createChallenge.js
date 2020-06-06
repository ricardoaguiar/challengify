import React, {useState} from 'react'

import {
  Columns,
  Gap,
  InputField,
  RadioButtonGroup,
  Select,
  View
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

const getTitlePlaceholder = type => {
  if (type === target) {
    return 'e.g. Read more'
  }
  if (type === limit) {
    return 'e.g. Smoke less'
  }
  if (type === track) {
    return 'e.g. Do 60 push-ups'
  }
}

const getUnitSingularPlaceholder = type => {
  if (type === target) {
    return 'e.g. book'
  }
  if (type === limit) {
    return 'e.g. cigarette'
  }
  if (type === track) {
    return 'e.g. push-up'
  }
}

const getUnitPluralPlaceholder = type => {
  if (type === target) {
    return 'e.g. books'
  }
  if (type === limit) {
    return 'e.g. cigarettes'
  }
  if (type === track) {
    return 'e.g. push-ups'
  }
}

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
  const [period, onSetPeriod] = useState('week')
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
        placeholder={getTitlePlaceholder(type)}
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
                placeholder={getUnitSingularPlaceholder(type)}
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
                placeholder={getUnitPluralPlaceholder(type)}
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
              min={0}
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
              placeholder={getUnitSingularPlaceholder(type)}
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
              placeholder={getUnitPluralPlaceholder(type)}
            />
          </div>
          <div>
            <Select
              id='period'
              label='period'
              value={period}
              onChange={({target: {value}}) => {
                onSetPeriod(value)
              }}
            >
              <option value="day">every day</option>
              <option value="2day">every other day</option>
              <option value="week">every week</option>
              <option value="2week">every two weeks</option>
              <option value="month">every month</option>
              <option value="2month">every two months</option>
              <option value="3month">every three months</option>
              <option value="6month">every six months</option>
              <option value="year">every year</option>
            </Select>
          </div>
        </Columns>
      )}
    </View>
  )
}

export default CreateChallenge
