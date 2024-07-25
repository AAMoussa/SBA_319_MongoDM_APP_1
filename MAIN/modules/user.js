//Create MongoDB models (using Mongoose for simplicity) or define schemas directly

const { getDB } = require('../db/db');

async function getUsers() {
  const db = getDB();
  return await db.collection('users').find({}).toArray();
}

module.exports = { getUsers };