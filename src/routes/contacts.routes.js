import express from 'express';
import {
  getContactsControllers,
  getContactControllers,
} from '../controllers/contacts.controllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContactsControllers));

router.get('/:id', ctrlWrapper(getContactControllers));

export default router;
