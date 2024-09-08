const express = require('express');
const userController = require('../src/user/userController'); // Asegúrate de que la ruta sea correcta
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);

module.exports = router;
    