import createHttpError from 'http-errors';

import {
  getContacts,
  getContact,
  createContact,
  deleteContac,
  updateContact,
} from '../services/contacts.services.js';

import { parsePaginationPatams } from '../utils/parsePaginationPatams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export async function getContactsControllers(req, res) {
  const { page, perPage } = parsePaginationPatams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const contacts = await getContacts(page, perPage, sortBy, sortOrder);

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

export async function getContactControllers(req, res) {
  const contact = await getContact(req.params.id);

  if (contact === null) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${req.params.id}!`,
    data: contact,
  });
}

export async function createContactsController(req, res) {
  const contact = await createContact(req.body);
  console.log(contact);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
}

export async function deleteContactController(req, res, next) {
  const result = await deleteContac(req.params.id);
  console.log(result);
  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.status(204).end();
}

export async function updateContactController(req, res, next) {
  const result = await updateContact(req.params.id, req.body);
  console.log(result);
  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
}
