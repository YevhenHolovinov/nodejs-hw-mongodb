import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactRouter from './routes/contacts.routes.js';
import { notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(pino());
app.use('/contacts', contactRouter);

app.use(notFoundHandler);

export default app;
