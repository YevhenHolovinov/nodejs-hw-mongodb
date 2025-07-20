import express from 'express';
import {
  getContactsControllers,
  getContactControllers,
  createContactsController,
  deleteContactController,
  updateContactController,
} from '../controllers/contacts.controllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContactsControllers));

router.get('/:id', ctrlWrapper(getContactControllers));

router.post('/', ctrlWrapper(createContactsController));

router.delete('/:id', ctrlWrapper(deleteContactController));

router.patch('/:id', ctrlWrapper(updateContactController));

export default router;
