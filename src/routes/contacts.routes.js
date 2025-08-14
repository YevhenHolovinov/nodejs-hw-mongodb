import express from 'express';

import {
  getContactsControllers,
  getContactControllers,
  createContactController,
  deleteContactController,
  updateContactController,
  replaceContactController,
} from '../controllers/contacts.controllers.js';

import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';

import {
  contactsSchema,
  updateContactsSchema,
} from '../validation/contacts.validation.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContactsControllers));

router.get('/:id', isValidId, ctrlWrapper(getContactControllers));

router.post(
  '/',
  validateBody(contactsSchema),
  ctrlWrapper(createContactController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

router.patch(
  '/:id',
  validateBody(updateContactsSchema),
  isValidId,
  ctrlWrapper(updateContactController),
);

router.put(
  '/:id',
  isValidId,
  validateBody(contactsSchema),
  ctrlWrapper(replaceContactController),
);

export default router;
