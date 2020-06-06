import React from 'react'

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
    />
    <Gap size='big' />
    <Columns gapSize='big'>
      <div>
        <InputField
          id='newChallengeStartDate'
          label='Start date'
          type='date'
        />
      </div>
      <div>
        <InputField
          id='newChallengeEndDate'
          label='End date'
          type='date'
        />
      </div>
    </Columns>
  </View>
)
export default CreateChallenge
