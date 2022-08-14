import TodoList from "./todoList";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from "../../../service/actions/userAction";
import { useNavigate } from 'react-router-dom'
const Todo = () => {
    const [todo, setTodo] = useState({
        todo: ''
    })
    const changeHandler = (e) => {
        const value = e.target.value
        setTodo({
            ...todo,
            [e.target.name]: value
        })
    }

    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo({ todo: '' })
    }
    const navigate = useNavigate()
    return (
        <div style={{ textAlign: 'center' }} >
            <button style={{
                position: 'relative',
                float: "right",
                marginRight: '50px'

            }}
                onClick={() => localStorage.removeItem('token') + navigate('/')}
            >Logout</button>


            <div style={{
                border: 'solid black 1px',
                maxWidth: 'max-content',
                margin: '0 auto',
                padding: '10px'

            }} >
                <form onSubmit={submit}>
                    <label>Todo:</label><br />
                    <input
                        type='text'
                        placeholder="add Todo"
                        size={40}
                        name='todo'
                        value={todo.todo}
                        onChange={(e) => changeHandler(e)}
                    /> <br />
                    <input
                        style={{
                            width: '30%'
                        }}
                        type='submit' value='Add' />
                </form>
                <TodoList />
            </div>

        </div>
    )
}

export default Todo;