import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo, getTodo } from "../../../service/actions/userAction"

const TodoList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodo());
    }, [])
    const todos = useSelector(state => state.todo);

    const [newTodo, setNewTodo] = useState('')

    const [oldTodo, setoldTodo] = useState({})

    const [edit, setEdit] = useState(false)
    const changeHandler = (e) => {
        const value = e.target.value
        setNewTodo(value)
    }

    const submit = (e) => {
        e.preventDefault();

        const data ={...oldTodo,newTodo}
        dispatch(updateTodo(data))
        setNewTodo('')
        setoldTodo({})
        setEdit(false)
    }

    return (
        <div>
            {
                todos ?
                    todos.map((val, key) => {
                        return (
                            <div key={key} style={{
                                border: "solid black 1px", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'
                            }} >
                                <div>
                                    <strong>
                                        {key + 1}. &ensp;
                                    </strong>
                                    {val.todo}
                                </div>
                                <div>
                                    <button onClick={() => setEdit(true) + setoldTodo(val)}>Edit</button>
                                    <button onClick={() => dispatch(removeTodo(val))} >delete</button>
                                </div>
                            </div>
                        )
                    })

                    : ''
            }


            <div style={{
                position: 'absolute',
                border: 'solid red 1px',
                padding: '10px',
                backgroundColor: '#fff',
                display: edit ? 'block' : 'none'
            }} >
                <button
                    style={{ position: 'relative', float: 'right' }}
                    onClick={() => setEdit(false)}
                >x</button>
                <br />
                <form onSubmit={submit}>
                    <label>Edit Todo:</label><br />
                    <input
                        type='text'
                        placeholder="add Todo"
                        size={40}
                        name='todo'
                        value={newTodo}
                        onChange={(e) => changeHandler(e)}
                    /> <br />
                    <input
                        style={{
                            width: '30%'
                        }}
                        type='submit' value='Add' />
                </form>
            </div>

        </div>
    )
}
export default TodoList