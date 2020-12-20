import Dexie from "dexie";

const initializeDatabase = () => {
  const db = new Dexie("challengify");
  db.version(1).stores({
    challenges: "++id,startTimestamp,archived,completed",
    records: "++id,challengeId,timestamp,value",
  });
  return db;
};

const db = initializeDatabase();

export default db;
