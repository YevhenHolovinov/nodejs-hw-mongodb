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

const router = express.Router();

router.get('/', ctrlWrapper(getContactsControllers));

router.get('/:id', isValidId, ctrlWrapper(getContactControllers));

router.post('/', ctrlWrapper(createContactsController));

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

router.patch('/:id', isValidId, ctrlWrapper(updateContactController));

export default router;
