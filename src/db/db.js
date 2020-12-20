import createChallenge from "./createChallenge/createChallenge";
import getChallenges from "./getChallenges/getChallenges";
import getRecordsForChallenge from "./getRecordsForChallenge/getRecordsForChallenge";

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

export { createChallenge, getChallenges, getRecordsForChallenge };
