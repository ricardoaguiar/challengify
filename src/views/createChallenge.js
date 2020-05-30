import React from 'react'

import View from '../components/viewSkeleton/viewSkeleton'
import InputField from '../components/inputField/inputField'
import Gap from '../components/gap/gap'
import RadioButtonGroup from '../components/radioButtonGroup/radioButtonGroup'

const CreateChallenge = () => (
  <View
    title='Create new challenge'
    actions={{
      left: {
        to: '..',
        text: 'Back'
      }
    }}
  >
    <InputField
      id='newChallengeTitle'
      label='Title'
      placeholder='e.g. Smoke less'
    />
    <Gap size='big' />
    <RadioButtonGroup
      options={[
        {label: 'Target', selected: true},
        {label: 'Limit'},
        {label: 'Track'}
      ]}
    />
  </View>
)
export default CreateChallenge
