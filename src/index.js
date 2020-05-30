import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import {
  createChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge
} from './db'
import * as serviceWorker from './serviceWorker'

import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

const testDb = async () => {
  await createChallenge({
    title: 'Test title',
    type: 'minimum',
    startTimestamp: Date.now(),
    endTimestamp: null,
    targetValue: 1,
    scheduling: {
      type: "weekly",
      times: 3
    },
    unit: {
      singular: "time",
      plural: "times"
    }
  })

  const challenges = await getChallenges()

  const lastChallengeIndex = challenges.length - 1
  const lastChallengeId = challenges[lastChallengeIndex].id
  await updateChallenge({
    id: lastChallengeId,
    title: 'Updated test title',
    type: 'minimum',
    startTimestamp: Date.now(),
    endTimestamp: null,
    targetValue: 1,
    scheduling: {
      type: "weekly",
      times: 3
    },
    unit: {
      singular: "time",
      plural: "times"
    }
  })

  const firstChallengeId = challenges[0].id
  await deleteChallenge({id: firstChallengeId})
}

testDb()
