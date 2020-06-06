import React, {useState} from 'react'

import View from '../components/view/view'
import InputField from '../components/inputField/inputField'
import Gap from '../components/gap/gap'
import RadioButtonGroup from '../components/radioButtonGroup/radioButtonGroup'
import Columns from '../components/columns/columns'

const getTodaysDate = () => {
  const today = new Date()
  const dd = `${today.getDate()}`.padStart(2, '0')
  const mm = `${today.getMonth() + 1}`.padStart(2, '0')
  const yyyy = today.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

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
