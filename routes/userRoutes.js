const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateUser = require('../middlewares/authenticateUser');
 
// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
 
// Protected route
router.get('/users', authenticateUser, userController.getAllUsers);
 
module.exports = router;
