const express= require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

// post req
 router.post('/', userControllers.addUser);

 // get all user
 router.get('/', userControllers.getAllUsers);


 // user id
 router.get('/:id', userControllers.getUserById);

 // update users
 router.put('/:id', userControllers.updateUser);

 // delete user
 router.delete('/:id', userControllers.deleteUser);

 module.exports = router;
 

