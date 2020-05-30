import React from 'react'

import View from '../components/viewSkeleton/viewSkeleton'

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
    <p>
      Create new challenge form will come here
    </p>
  </View>
)
export default CreateChallenge
