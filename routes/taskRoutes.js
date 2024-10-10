const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

//#region GET
router.get('/', taskController.getAllTasks);

router.get('/:id', taskController.getTask);
//#endregion GET

//#region POST
router.post('/', taskController.createTask);
//#endregion POST

//#region PUT
router.put('/:id', taskController.updateTask)
//#endregion PUT

//#region DELETE
router.delete('/:id', taskController.deleteTask);
//#endregion DELETE

module.exports = router;