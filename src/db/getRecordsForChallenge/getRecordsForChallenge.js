import db from "db/init";

const getRecordsForChallenge = async (challenge) => {
  const records = await db.records
    .where("challengeId")
    .equals(challenge.id)
    .toArray();
  return {
    ...challenge,
    records,
  };
};

export default getRecordsForChallenge;
