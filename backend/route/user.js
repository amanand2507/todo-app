const express = require('express');
const router = express.Router();

const { signup, login, logout, getUser, userUpdate, userDelete } = require('../controllers/user.js');
const { jwtAuth } = require('../middleware/jwtAuth.js');
const { signupDataValidate } = require('../middleware/signupDataValidate.js');
const { loginDataValidate } = require('../middleware/loginDataValidate.js');

// ......auth....... 
router.post('/signup', signupDataValidate, signup);
router.post('/login', loginDataValidate, login);
router.get('/logout', jwtAuth, logout);

// ....user.........
router.get('/user', jwtAuth, getUser);
router.put('/user/update', jwtAuth, userUpdate);
router.delete('/user/delete', jwtAuth, userDelete);