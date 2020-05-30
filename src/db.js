import Dexie from 'dexie'

const initializeDatabase = () => {
  const db = new Dexie('challengify')
  db.version(1).stores({
    challenges: '++id,startTimestamp,archived',
    records: '++id,challengeId,timestamp,value'
  })
  return db
}

const db = initializeDatabase()

// getChallenges().then(console.log)

const getChallenges = async () => await (
  db
    .challenges
    .toArray()
  // TODO: Get associated records here
)

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
  targetValue,
  scheduling,
  unit
}) => await (
  db.challenges.put({
      title,
      type,
      startTimestamp,
      endTimestamp,
      targetValue,
      scheduling,
      unit,
      archived: 0
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
const updateChallenge = async ({
  id,
  title,
  type,
  startTimestamp,
  endTimestamp,
  targetValue,
  scheduling,
  unit,
  archived
}) => await (
  db.challenges.update(id, {
    title,
    type,
    startTimestamp,
    endTimestamp,
    targetValue,
    scheduling,
    unit,
    archived
  })
)

// deleteChallenge({id: idToDelete})

// deleteChallenge
const deleteChallenge = async ({id}) => await (
  db.challenges.delete(id)
  // TODO: Delete associated records here
)

// createRecord
const createRecord = async ({
  challengeId,
  timestamp,
  value
}) => await (
  db.records.put({
    challengeId,
    timestamp,
    value
  })
)

// updateRecord
// deleteRecord

export {
  createChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge,
  createRecord
}
