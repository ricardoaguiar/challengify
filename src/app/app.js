import React from 'react'
import {Router, Link} from "@reach/router"

import {CreateChallenge} from '../views/views'
import {Chrome} from '../components/components'
import {
  createChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge,
  createRecord,
  updateRecord,
  deleteRecord
} from './db'

const EditRecord = ({challengeId, recordId}) => (
  <Chrome
    title={`Edit record ${recordId} of challenge ${challengeId}`}
    actions={{
      left: {
        to: '../../..',
        text: 'Back'
      }
    }}
  >
    <Link to='../delete'>Delete</Link>
  </Chrome>
)

const DeleteRecord = ({challengeId, recordId}) => (
  <div>
    Delete record {recordId} of challenge {challengeId}?
    <Link to='../edit'>No, go back to record</Link>
  </div>
)

const ChallengeSettings = ({challengeId}) => (
  <Chrome
    title={`Challenge settings for ${challengeId}`}
    actions={{
      left: {
        to: '..',
        text: 'Back'
      }
    }}
  >
    <Link to='../delete'>Delete</Link>
  </Chrome>
)

const DeleteChallenge = ({challengeId}) => (
  <div>
    <h2>Delete challenge {challengeId}?</h2>
    <Link to='../settings'>No, back to challenge</Link>
  </div>
)

const Challenge = ({challengeId}) => (
  <Chrome
    title={`Challenge ${challengeId}`}
    actions={{
      left: {
        to: '..',
        text: 'Back'
      },
      right: {
        to: 'settings',
        text: 'Edit'
      }
    }}
  >
    <h3>Record 1</h3>
    <Link to='records/1/edit'>Edit</Link>

    <h3>Record 2</h3>
    <Link to='records/2/edit'>Edit</Link>

    <h3>Record 3</h3>
    <Link to='records/3/edit'>Edit</Link>
  </Chrome>
)

const ChallengeRouter = ({challengeId}) => (
  <Router className='fullSize'>
    <ChallengeSettings path="settings" />
    <DeleteChallenge path="delete" />
    <EditRecord
      path="records/:recordId/edit"
      challengeId={challengeId}
    />
    <DeleteRecord
      path="records/:recordId/delete"
      challengeId={challengeId}
    />
    <Challenge
      path="./"
      default
      challengeId={challengeId}
    />
  </Router>
)

const Challenges = () => (
  <Chrome
    title='Challenges'
    actions={{
      right: {
        to: 'new',
        text: 'New'
      }
    }}
  >
    <Link to='id1'>Challenge 1</Link>
    <Link to='id2'>Challenge 2</Link>
    <Link to='id3'>Challenge 3</Link>
  </Chrome>
)

const ChallengesRouter = () => (
  <Router className='fullSize'>
    <CreateChallenge path="new" />
    <ChallengeRouter path=":challengeId/*" />
    <Challenges path="challenges" default />
  </Router>
)

const App = () => (
  <Router className='fullSize'>
    <ChallengesRouter path="challenges/*" />
  </Router>
)

export default App

const testDb = async () => {
  const firstChallengeId = await createChallenge({
    title: 'Test title 1',
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

  const lastChallengeId = await createChallenge({
    title: 'Test title 2',
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

  await updateChallenge({
    id: lastChallengeId,
    title: 'Updated test title 2',
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

  await createRecord({
    challengeId: lastChallengeId,
    timestamp: Date.now(),
    value: Date.now()
  })

  await createRecord({
    challengeId: lastChallengeId,
    timestamp: Date.now() + 1234,
    value: Date.now() + 2345
  })

  await createRecord({
    challengeId: lastChallengeId,
    timestamp: Date.now() + 1234,
    value: Date.now() + 2345
  })

  await deleteChallenge({id: firstChallengeId})

  let challenges = await getChallenges()
  const lastChallenge = challenges.find(({id}) => id === lastChallengeId)
  const recordToDelete = lastChallenge.records[0]
  const recordToUpdate = lastChallenge.records[1]
  await updateRecord({
    ...recordToUpdate,
    value: -1
  })
  await deleteRecord({id: recordToDelete.id})

  challenges = await getChallenges()
  console.log({challenges})
}

testDb()
