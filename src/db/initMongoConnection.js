import mongoose from 'mongoose';
import { getEnvVariable } from '../utils/getEnvVariable.js';

const MONGODB_USER = getEnvVariable('MONGODB_USER');
const MONGODB_PASSWORD = getEnvVariable('MONGODB_PASSWORD');
const MONGODB_URL = getEnvVariable('MONGODB_URL');
const MONGODB_DB = getEnvVariable('MONGODB_DB');

async function initMongoConnection() {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
}
export { initMongoConnection };
