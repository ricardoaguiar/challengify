import React from 'react'

import View from '../components/viewSkeleton/viewSkeleton'
import InputField from '../components/inputField/inputField'

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
  </View>
)
export default CreateChallenge
