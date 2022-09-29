const homeControllers = require('./../controllers/homeControllers');

const express = require('express');
const router = express.Router();

router.get('/', homeControllers.index);
router.get('/login' , homeControllers.login)
router.get('/registro' , homeControllers.registro)
module.exports = router;