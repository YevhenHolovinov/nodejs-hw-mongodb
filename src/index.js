import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactRouter from './routes/contacts.routes.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHendler } from './middlewares/errorHendler.js';

const app = express();

app.use(cors());
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);
app.use('/contacts', contactRouter);
app.use(notFoundHandler);
app.use(errorHendler);

export default app;
