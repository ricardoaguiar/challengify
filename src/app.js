import React from 'react'
import {Router, Link} from "@reach/router"

import CreateChallenge from './views/createChallenge'

import './app.css'

const EditRecord = ({challengeId, recordId}) => (
  <div>
    Edit record {recordId} of challenge {challengeId}.
    <Link to='../../..'>Back to challenge</Link>
  </div>
)

const DeleteRecord = ({challengeId, recordId}) => (
  <div>
    Delete record {recordId} of challenge {challengeId}?
    <Link to='../../..'>No, go back to challenge</Link>
  </div>
)

const ChallengeSettings = ({challengeId}) => (
  <div>
    <h2>Challenge settings for {challengeId}</h2>
    <Link to='..'>Back to challenge</Link>
  </div>
)

const DeleteChallenge = ({challengeId}) => (
  <div>
    <h2>Delete challenge {challengeId}?</h2>
    <Link to='..'>No, back to challenge</Link>
  </div>
)

const Challenge = ({challengeId}) => (
  <div>
    <h2>Challenge {challengeId}</h2>
    <Link to='settings'>Settings</Link>
    <Link to='delete'>Delete</Link>
    <Link to='..'>Challenges</Link>

    <h3>Record 1</h3>
    <Link to='records/1/edit'>Edit</Link>
    <Link to='records/1/delete'>Delete</Link>

    <h3>Record 2</h3>
    <Link to='records/2/edit'>Edit</Link>
    <Link to='records/2/delete'>Delete</Link>

    <h3>Record 3</h3>
    <Link to='records/3/edit'>Edit</Link>
    <Link to='records/3/delete'>Delete</Link>
  </div>
)

const ChallengeRouter = ({challengeId}) => (
  <div>
    <h1>Challenge router for {challengeId}</h1>
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
  </div>
)

const Challenges = () => (
  <div>
    <h2>Challenges</h2>
    <Link to='id1'>Challenge 1</Link>
    <Link to='id2'>Challenge 2</Link>
    <Link to='id3'>Challenge 3</Link>
    <Link to='new'>New</Link>
  </div>
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
