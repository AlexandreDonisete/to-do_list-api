const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


//#region GET
router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);
//#endregion GET

//#region POST
router.post('/', userController.createUser);
//#endregion POST

//#region PUT
router.put('/:id', userController.updateUser);
//#endregion PUT

//#region DELETE
router.delete('/:id', userController.deleteUser);
//#endregion DELETE

module.exports = router;