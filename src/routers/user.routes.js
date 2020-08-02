const { Router } = require('express');
const { getAllUsers, getUserById, saveUser, updateUser, deleteUser  } = require('../controllers/user.controller');


const router = Router();

router.get('/', getAllUsers );

router.get('/:id', getUserById);

router.post('/', saveUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser );


module.exports = router;