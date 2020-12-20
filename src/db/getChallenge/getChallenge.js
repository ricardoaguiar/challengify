import db from "db/init";

import { getRecordsForChallenge } from "db/db";

const getChallenge = async ({ id }) => {
  const challenge = await db.challenges.get({ id });
  if (challenge) {
    return await getRecordsForChallenge(challenge);
  }
  return undefined;
};

export default getChallenge;
