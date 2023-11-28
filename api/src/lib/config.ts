import dotenv from 'dotenv';

dotenv.config();


const config = {
    dbUser: process.env.PGUSER || 'postgres',
    dbPassword: process.env.PGPASSWORD || 'P455W02D',
    dbHost: process.env.PGHOST || 'localhost',
    dbName: process.env.PGDATABASE || 'videogames',
    dbPort: process.env.PGPORT || '5432',
    port: process.env.PGPORT || '3001',
    host: process.env.PGHOST || 'localhost',
    cors: process.env.CORS || 'localhost:3000',
   };
   
   export default config;