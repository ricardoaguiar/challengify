import db from "db/init";

import { getRecordsForChallenge } from "db/db";

const getChallenges = async () => {
  const challenges = await db.challenges.toArray();
  return await Promise.all(challenges.map(getRecordsForChallenge));
};

export default getChallenges;
