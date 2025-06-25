import express from 'express';
import {
  uploadSingleImage,
  uploadMultipleImages,
  handleSingleImageUpload,
  handleMultipleImagesUpload,
  deleteImage
} from '../controllers/uploadController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Protected routes (admin only)
router.use(authenticate);
router.use(authorize('admin'));

// Single image upload
router.post('/image', uploadSingleImage, handleSingleImageUpload);

// Multiple images upload
router.post('/images', uploadMultipleImages, handleMultipleImagesUpload);

// Delete image
router.delete('/image/:filename', deleteImage);

export default router;