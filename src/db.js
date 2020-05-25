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

const getChallenges = async () => await (
  db
    .challenges
    .toArray()
)

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

// updateChallenge
// deleteChallenge
// getRecordsForChallenge
// createRecord
// updateRecord
// deleteRecord

export {createChallenge, getChallenges}
