import express from 'express';
import {
  register,
  login,
  verifyToken,
  logout,
  getProfile
} from '../controllers/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.use(authenticate); // Apply authentication middleware to all routes below
router.get('/verify', verifyToken);
router.post('/logout', logout);
router.get('/profile', getProfile);

export default router;