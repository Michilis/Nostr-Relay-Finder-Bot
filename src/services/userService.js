const { MongoClient } = require('mongodb');
const { dbUri } = require('../config/config');

async function connectDb() {
  const client = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db('nostr-relay-finder');
}

module.exports = {
  async saveUserNpub(userId, npub) {
    const db = await connectDb();
    const users = db.collection('users');
    await users.updateOne({ userId }, { $set: { npub } }, { upsert: true });
  },

  async getUserById(userId) {
    const db = await connectDb();
    const users = db.collection('users');
    return users.findOne({ userId });
  },

  async getUserByUsername(username) {
    const db = await connectDb();
    const users = db.collection('users');
    return users.findOne({ username });
  }
};
