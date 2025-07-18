import 'dotenv/config';

import app from './index.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { getEnvVariable } from './utils/getEnvVariable.js';

const PORT = getEnvVariable('PORT') || 8080;

async function setupServer() {
  await initMongoConnection();

  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Server is running on port ${PORT}`);
  });
}
setupServer().catch((error) => console.error(error));
