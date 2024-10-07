const { Router } = require( 'express');
const { addProductController, getAllProducts } = require('../../src/infrastructure/controllers/product_controller.js');


const router = Router();

router.post('/add', addProductController);
router.get('/',getAllProducts)
module.exports = router;
