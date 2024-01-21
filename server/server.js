import http from 'http'
import 'dotenv/config';
import {bootstrapApplication} from './app.js';
import {connectDatabase} from './database/database.js'
import "reflect-metadata";

const PORT = process.env.PORT || 3000;


   const startServer = async () => {
      await connectDatabase();

      const app = bootstrapApplication();
    
      const server = http.createServer(app);
    
      server.listen(PORT, () => {
        console.log(`App is listening on PORT ${PORT}`);
      });
    };
    
    startServer();       