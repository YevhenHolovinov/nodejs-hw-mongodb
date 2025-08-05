import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import contactRouter from './routes/contacts.routes.js';
import authRouter from './routes/auth.routes.js';

import { auth } from './middlewares/auth.js';
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
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/contacts', auth, contactRouter);

app.use(notFoundHandler);
app.use(errorHendler);

export default app;
