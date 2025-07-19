import express from 'express';
import {
  getContactsControllers,
  getContactControllers,
} from '../controllers/contacts.controllers.js';

const router = express.Router();

router.get('/', getContactsControllers);

router.get('/:id', getContactControllers);

export default router;
