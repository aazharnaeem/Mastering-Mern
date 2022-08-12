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

        res.status(200).send({ message: 'Todo added', sucess: true });
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
        const { todoId } = req.body;

        const exUser = await userModel.doesUserExists(id)
        if (!exUser) {
            res.status(400).send({ message: 'no such user', sucess: true });
        }
        const exTodo = await todoModel.find({ _id: todoId, user: id });
        if (!exTodo) {
            res.status(400).send({ message: 'no such data', sucess: true });
        }
        exTodo.remove()

        res.status(200).send({ message: 'todo deleted', sucess: true });
    }
    catch (error) {
        res.status(500).send({ error: error, message: 'error' })
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { todoId, todo } = req.body;
        const exUser = await userModel.doesUserExists(id)
        if (!exUser) {
            res.status(400).send({ message: 'no such user', sucess: true });
        }
        const exTodo = await todoModel.find({ _id: todoId, user: id });
        if (!exTodo) {
            res.status(400).send({ message: 'no such data', sucess: true });
        }

        exTodo.todo = todo;
        exTodo.save();

        res.status(200).send({ message: 'todo upadated', sucess: true });
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