import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'dotenv/config';
import app from './app';
import './database';

// Initializing Server
const main = async () => {
  await app.listen(app.get('port'));
  console.log(`Server on port ${app.get('port')}`);
};

main();
