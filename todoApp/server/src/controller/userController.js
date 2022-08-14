const { userModel, todoModel } = require('../model');

const addTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { todo } = req.body;

        const exUser = await userModel.doesUserExists(id)
        if (!exUser) {
            res.status(400).send({ message: 'no such user', sucess: true });
        }

        const newTodo = new todoModel({
            user: id,
            todo: todo
        })
        newTodo.save();

        res.status(200).send({ todo: newTodo, message: 'Todo added', sucess: true });
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}

const getTodos = async (req, res) => {
    try {

        const { id } = req.params;

        const exUser = await userModel.doesUserExists(id)

        if (!exUser) {
            res.status(400).send({ message: 'no such user', sucess: true });
        }
        const todos = await todoModel.find({ user: id });

        res.status(200).send({ todos: todos, sucess: true })
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { _id } = req.body;
        const exUser = await userModel.doesUserExists(id)
        if (!exUser) {
            return res.status(400).send({ message: 'no such user', sucess: true });
        }
        const exTodo = await todoModel.findOne({ _id: _id, user: id })
        if (!exTodo) {
            return res.status(400).send({ message: 'no such data', sucess: true });
        }
        exTodo.remove()

        return res.status(200).send({ todo: exTodo, message: 'todo deleted', sucess: true });
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('editing')
        const { newTodo, _id } = req.body;
        const exUser = await userModel.doesUserExists(id)
        if (!exUser) {
            return res.status(400).send({ message: 'no such user', sucess: true });
        }
        const exTodo = await todoModel.findOne({ _id: _id, user: id });

        if (!exTodo) {
            return res.status(400).send({ message: 'no such data', sucess: true });
        }

        exTodo.todo = newTodo;
        exTodo.save();

        return res.status(200).send({ todo: exTodo, message: 'todo upadated', sucess: true });
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}

module.exports = {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo
}