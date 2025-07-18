import express from 'express';
import { Contact } from './models/contacts.js';
import pino from 'pino-http';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(pino());
app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
});

app.get('/contacts/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  console.log(contact);
  if (contact === null) {
    return res
      .status(404)
      .json({ status: 404, message: 'Contact not found', data: null });
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${req.params.id}!`,
    data: contact,
  });
});

app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: 'Not found' });
});

export default app;
