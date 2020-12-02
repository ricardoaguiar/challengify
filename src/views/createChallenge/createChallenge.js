import React from 'react'

import {navigate} from "@reach/router"

import {
  Columns,
  Gap,
  InputField,
  RadioButtonGroup,
  Select,
  Chrome,
  Button,
  ConfirmationDialog,
  Modal
} from '../../components/components'

import {capitalizeString} from './createChallenge.utility'

import {useFormState, useDiscardDialogVisibility} from './createChallenge.hooks'

import {createChallenge} from '../../app/db'

import {challengeTypes} from '../../constants/constants'

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
  const {
    title,
    startDate,
    endDate,
    type,
    unitSingular,
    unitPlural,
    initialValue,
    trackValue,
    targetLimitValue,
    period,
    onSetTitle,
    onSetStartDate,
    onSetEndDate,
    onSetType,
    onSetUnitSingular,
    onSetUnitPlural,
    onSetInitialValue,
    onSetTrackValue,
    onSetTargetLimitValue,
    onSetPeriod
  } = useFormState()

  const {
    isDiscardDialogVisible,
    onSetIsDiscardDialogVisible
  } = useDiscardDialogVisibility()

  return (
    <Chrome
      title='Create new challenge'
      links={{
        left: {
          to: '..',
          text: 'Back',
          onClick: event => {
            event.preventDefault()
            onSetIsDiscardDialogVisible(true)
          },
          tabIndex: isDiscardDialogVisible ? -1 : 0
        }
      }}
      actions={(
        <>
          <Button
            onClick={async () => {
              await createChallenge({
                title,
                type,
                startTimestamp: new Date(startDate).getTime(),
                endTimestamp: (endDate === "") ? null : new Date(endDate).getTime(),
                unit: {
                  singular: unitSingular,
                  plural: unitPlural
                },
                ...((type === track) && {
                  initialValue: Number(initialValue),
                  trackValue: Number(trackValue)
                }),
                ...([target, limit].includes(type) && {
                  targetValue: Number(targetLimitValue),
                  period
                })
              })
              navigate('/challenges/')
            }}
            tabIndex={isDiscardDialogVisible ? -1 : 0}
          >
            Create challenge
          </Button>
          <Gap size='small' direction='horizontal' />
          <Button
            onClick={() => {
              onSetIsDiscardDialogVisible(true)
            }}
            className='danger'
            tabIndex={isDiscardDialogVisible ? -1 : 0}
          >
            Discard
          </Button>
        </>
      )}
    >
      {isDiscardDialogVisible && (
        <Modal>
          <ConfirmationDialog
            confirmLabel='Discard'
            onConfirm={() => {
              navigate('/challenges/')
            }}
            onCancel={() => {
              onSetIsDiscardDialogVisible(false)
            }}
          >
            <p>Are you sure you want to discard this challenge?</p>
            <p>Your changes will be permanently lost.</p>
          </ConfirmationDialog>
        </Modal>
      )}
      <RadioButtonGroup
        options={getTypeOptions(type)}
        value={type}
        onChange={onSetType}
        buttonTabIndex={isDiscardDialogVisible ? -1 : 0}
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
        tabIndex={isDiscardDialogVisible ? -1 : 0}
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
            tabIndex={isDiscardDialogVisible ? -1 : 0}
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
            tabIndex={isDiscardDialogVisible ? -1 : 0}
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
                tabIndex={isDiscardDialogVisible ? -1 : 0}
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
                tabIndex={isDiscardDialogVisible ? -1 : 0}
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
                tabIndex={isDiscardDialogVisible ? -1 : 0}
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
                tabIndex={isDiscardDialogVisible ? -1 : 0}
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
            >
              <option value="day">every day</option>
              <option value="2days">every other day</option>
              <option value="week">every week</option>
              <option value="2weeks">every two weeks</option>
              <option value="month">every month</option>
              <option value="2months">every two months</option>
              <option value="3months">every three months</option>
              <option value="6months">every six months</option>
              <option value="year">every year</option>
            </Select>
          </div>
        </Columns>
      )}
    </Chrome>
  )
}

export default CreateChallenge
