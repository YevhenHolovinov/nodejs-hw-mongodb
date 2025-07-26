import express from 'express';
import {
  getContactsControllers,
  getContactControllers,
  createContactsController,
  deleteContactController,
  updateContactController,
} from '../controllers/contacts.controllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { contactsSchema } from '../validation/contacts.validation.js';
import { updateContactsSchema } from '../validation/contacts.validation.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContactsControllers));

router.get('/:id', isValidId, ctrlWrapper(getContactControllers));

router.post(
  '/',
  validateBody(contactsSchema),
  ctrlWrapper(createContactsController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

router.patch(
  '/:id',
  validateBody(updateContactsSchema),
  isValidId,
  ctrlWrapper(updateContactController),
);

export default router;
