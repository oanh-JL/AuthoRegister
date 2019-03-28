const express = require('express');
const router = express.Router();
const auth= require('../controllers').auth;
const userController= require('../controllers').user;
const departmentController= require('../controllers').department;


router.post('/api/users',userController.register);
router.get('/api/departments',departmentController.list);
router.post('/api/departments',departmentController.init);



module.exports = router;