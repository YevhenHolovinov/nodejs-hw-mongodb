import createHttpError from 'http-errors';

import {
  getContacts,
  getContactById,
  createContact,
  deleteContac,
  updateContact,
  replaceContact,
} from '../services/contacts.services.js';

import { parsePaginationPatams } from '../utils/parsePaginationPatams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export async function getContactsControllers(req, res) {
  const { page, perPage } = parsePaginationPatams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const contacts = await getContacts(
    page,
    perPage,
    sortBy,
    sortOrder,
    req.user.id,
  );

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

export async function getContactControllers(req, res) {
  const contact = await getContactById(req.params.id, req.user.id);

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
  const contact = await createContact({ ...req.body, ownerId: req.user.id });
  console.log(contact);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
}

export async function deleteContactController(req, res) {
  const result = await deleteContac(req.params.id);

  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.json({ status: 200, message: 'Contact deleted successfully' });
}

export async function updateContactController(req, res) {
  const result = await updateContact(req.params.id, req.body);

  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
}

export async function replaceStudentController(req, res) {
  const { value, updateExisting } = await replaceContact(
    req.params.id,
    req.body,
  );

  if (updateExisting === true) {
    return res.json({
      status: 200,
      message: 'Contact replaced successfully',
      data: value,
    });
  }

  res.status(201).json({
    status: 201,
    message: 'Contact created successfully',
    data: value,
  });
}
