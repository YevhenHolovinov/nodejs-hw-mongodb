import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginSchema, registerSchema } from '../validation/auth.validation.js';

import {
  loginController,
  logoutController,
  refreshController,
  registerController,
} from '../controllers/auth.controller.js';

import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();

router.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

router.post('/login', validateBody(loginSchema), ctrlWrapper(loginController));

router.post('/logout', ctrlWrapper(logoutController));

router.post('/refresh', ctrlWrapper(refreshController));

export default router;
