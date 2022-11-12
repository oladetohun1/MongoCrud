const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    
    title: { type: String, required: true },
    description: { type: String, required: true },
},
    { timestamps: true }
);


// Export the model
module.exports = mongoose.model('todoCollection', TodoSchema);
