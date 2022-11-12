const express = require('express');
const router = express.Router();


const todo_controller = require('../controllers/todo.controller');

router.get('/', todo_controller.findAll);
router.post('/create', todo_controller.todo_create);
router.get('/:id', todo_controller.todo_details);
router.put('/:id', todo_controller.todo_update);
router.delete('/:id', todo_controller.todo_delete);

module.exports = router;
