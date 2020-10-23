import Dexie from 'dexie'

import {challengeTypes} from '../constants/constants'

const {target, limit, track} = challengeTypes

const initializeDatabase = () => {
  const db = new Dexie('challengify')
  db.version(1).stores({
    challenges: '++id,startTimestamp,archived,completed',
    records: '++id,challengeId,timestamp,value'
  })
  return db
}

const db = initializeDatabase()

// const getRecordsForChallenge = async challenge => {
//   const records = await db
//     .records
//     .where('challengeId')
//     .equals(challenge.id)
//     .toArray()
//   return {
//     ...challenge,
//     records
//   }
// }

// const getChallenges = async () => {
//   const challenges = await (
//     db
//       .challenges
//       .toArray()
//   )
//   return await Promise.all(
//     challenges.map(getRecordsForChallenge)
//   )
// }

// createChallenge({
//   title: 'Test title',
//   type: 'minimum',
//   startTimestamp: Date.now(),
//   endTimestamp: null,
//   targetValue: 1,
//   scheduling: {
//     type: "weekly",
//     times: 3
//   },
//   unit: {
//     singular: "time",
//     plural: "times"
//   }
// })

const createChallenge = async ({
  title,
  type,
  startTimestamp,
  endTimestamp,
  unit: {
    singular,
    plural
  },
  initialValue,
  trackValue,
  targetValue,
  period
}) => await (
  db.challenges.put({
    title,
    type,
    startTimestamp,
    endTimestamp,
    unit: {
      singular,
      plural
    },
    ...((type === track) && {
      initialValue,
      trackValue
    }),
    ...([target, limit].includes(type) && {
      targetValue,
      period
    }),
    completed: false,
    archived: false
  })
)

// updateChallenge({
//   id: idToUpdate,
//   title: 'Updated test title',
//   type: 'minimum',
//   startTimestamp: Date.now(),
//   endTimestamp: null,
//   targetValue: 1,
//   scheduling: {
//     type: "weekly",
//     times: 3
//   },
//   unit: {
//     singular: "time",
//     plural: "times"
//   }
// })

// updateChallenge
// const updateChallenge = async ({
//   id,
//   title,
//   type,
//   startTimestamp,
//   endTimestamp,
//   targetValue,
//   scheduling,
//   unit,
//   archived
// }) => await (
//   db.challenges.update(id, {
//     title,
//     type,
//     startTimestamp,
//     endTimestamp,
//     targetValue,
//     scheduling,
//     unit,
//     archived
//   })
// )

// deleteChallenge({id: idToDelete})

// deleteChallenge
// const deleteChallenge = async ({id}) => {
//   await db
//     .records
//     .where('challengeId')
//     .equals(id)
//     .delete()
//   return await (
//     db.challenges.delete(id)
//   )
// }

// createRecord
// const createRecord = async ({
//   challengeId,
//   timestamp,
//   value
// }) => await (
//   db.records.put({
//     challengeId,
//     timestamp,
//     value
//   })
// )

// updateRecord
// const updateRecord = async ({
//   id,
//   challengeId,
//   timestamp,
//   value
// }) => await (
//   db.records.update(id, {
//     challengeId,
//     timestamp,
//     value
//   })
// )

// deleteRecord
// const deleteRecord = async ({id}) => await (
//   db.records.delete(id)
// )

export {
  createChallenge
  // getChallenges,
  // updateChallenge,
  // deleteChallenge,
  // createRecord,
  // updateRecord,
  // deleteRecord
}
