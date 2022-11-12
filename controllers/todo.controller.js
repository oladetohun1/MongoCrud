const Todo = require('../models/todo.model');


// Retrieve all todos from the database
exports.findAll = function (req, res) {
      
    Todo.find(req, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    })
      
    };


// create todo
exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            // id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            timestamp: req.body.timestamp
        }
    );
    todo.save(function (err, next) {
        if (err) {
            return next(err);
        }
        res.send('task Created successfully')
    })
};

// Find task by id
exports.todo_details = function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    })
};

// update a todo
exports.todo_update = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return next(err);
        res.send('Updated successfully');
    });
};

// delete
exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
