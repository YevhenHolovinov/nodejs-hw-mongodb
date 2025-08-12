import mongoose from 'mongoose';
import { getEnvVariable } from '../utils/getEnvVariable.js';

const MONGODB_USER = getEnvVariable('MONGODB_USER');
const MONGODB_PASSWORD = getEnvVariable('MONGODB_PASSWORD');
const MONGODB_URL = getEnvVariable('MONGODB_URL');
const MONGODB_DB = getEnvVariable('MONGODB_DB');

async function initMongoConnection() {
  await mongoose.connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`,
  );
}
export { initMongoConnection };
