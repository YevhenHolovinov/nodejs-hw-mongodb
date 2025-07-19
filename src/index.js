import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactRouter from './routes/contacts.routes.js';

const app = express();

app.use(cors());
app.use(pino());
app.use('/contacts', contactRouter);

app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: 'Not found' });
});

export default app;
