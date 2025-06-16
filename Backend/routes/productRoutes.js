const express = require('express');
const router = express.Router();
import { getAllProducts, getSingleProduct } from '../controller/ProductController.js';

//Routes
router.route("/api/v1/products").get(getAllProducts)
router.route('/api/v1/Product').get(getSingleProduct)


module.exports = router;