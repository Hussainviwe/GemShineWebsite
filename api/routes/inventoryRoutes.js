import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  bulkDeleteProducts,
  getInventoryStats
} from '../controllers/inventoryController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllProducts);
router.get('/stats', getInventoryStats);
router.get('/:id', getProductById);

// Protected routes (admin only)
router.use(authenticate);
router.use(authorize('admin'));

router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/bulk-delete', bulkDeleteProducts);

export default router;