import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import genres from './genre.js';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// eslint-disable-next-line no-undef
if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}

async function loadGenres() {
    console.log('load genre Data');
    try {
      await userModel.deleteMany();
      await userModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }
  
 