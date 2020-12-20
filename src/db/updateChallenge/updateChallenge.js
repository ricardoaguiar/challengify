import db from "db/init";
import { challengeTypes } from "constants/constants";

const { target, limit, track } = challengeTypes;

const updateChallenge = async ({
  id,
  title,
  type,
  startTimestamp,
  endTimestamp,
  unit: { singular, plural },
  initialValue,
  trackValue,
  targetValue,
  period,
}) =>
  await db.challenges.update(id, {
    title,
    type,
    startTimestamp,
    endTimestamp,
    unit: {
      singular,
      plural,
    },
    ...(type === track && {
      initialValue,
      trackValue,
    }),
    ...([target, limit].includes(type) && {
      targetValue,
      period,
    }),
    completed: false,
    archived: false,
  });

export default updateChallenge;
