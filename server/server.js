import http from 'http'
import 'dotenv/config';
import {app} from './app.js';
import {connectDatabase} from './database/database.js'
import "reflect-metadata";

const PORT = process.env.PORT || 3000;


   const startServer = async () => {
      await connectDatabase();
    
      const server = http.createServer(app);
    
      server.listen(PORT, () => {
        console.log(`App is listening on PORT ${PORT}`);
      });
    };
    
    startServer();       