import express, {Application, Request, Response, NextFunction} from 'express';
import cookieParser = require('cookie-parser');
import morgan = require('morgan');
const routes = require('./routes/index.js');
import cors = require('cors');

const server: Application = express();


server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'],
})
)

server.use('/', routes);


interface error {
  status: number;
  message: string;
 }
// Error catching endware.
server.use((err: error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
