import dotenv from 'dotenv';

dotenv.config();


const config = {
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'P455W02D',
    dbHost: process.env.DB_HOST || 'localhost',
    dbName: process.env.DB_NAME || 'videogames',
    dbPort: process.env.DB_PORT || '5432',
    port: process.env.PORT || '3001',
   };
   
   export default config;