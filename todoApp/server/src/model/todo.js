const mongoose = require('mongoose');


const schema = mongoose.Schema;

const todoSchema = schema({
    user: {
        type: schema.Types.ObjectId,
        required: true
    },
    todo: {
        type: String,
        require: true
    }
});


const todo = mongoose.model('todo', todoSchema);

module.exports = todo;