import { Router } from 'express';
import { addProductController, getAllProducts } from '../../src/infrastructure/controllers/product_controller.js';


const router = Router();

router.post('/add', addProductController);
router.get('/',getAllProducts)
export default router;
