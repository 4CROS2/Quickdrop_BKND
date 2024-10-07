const { Router } = require( 'express');
const { addProductController, getAllProducts } = require('../../src/infrastructure/controllers/product_controller.js');
const FirebaseTokenMiddleware = require('../../src/middleware/firebaseToken_middleware.js');


const router = Router();

router.post('/add', addProductController);
router.get('/',FirebaseTokenMiddleware,getAllProducts)
module.exports = router;
