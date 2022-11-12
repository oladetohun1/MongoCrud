const express = require('express');
const bodyParser = require('body-parser');
const todo = require('./routes/todo.route');
const mongoose = require('mongoose');
const app = express();

let port = process.env.PORT || 3030;

// Set up mongoose connection
let dev_db_url = 'mongodb+srv://kelleman:kelleman9119@cluster0.zkzndlr.mongodb.net/todoDB?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', todo);

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});

