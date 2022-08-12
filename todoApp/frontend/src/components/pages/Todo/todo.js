import TodoList from "./todoList";


const Todo = () => {
    return (
        <div style={{ textAlign: 'center' }} >


            <div style={{
                border: 'solid black 1px',
                maxWidth: 'max-content',
                margin: '0 auto',
                padding:'10px'

            }} >
                <form>
                    <label>Todo:</label><br />
                    <input type='text' placeholder="add Todo" size={40} /> <br />
                    <input
                        style={{
                            width:'30%'
                        }}
                        type='submit' value='Add' />
                </form>
            <TodoList />
            </div>

        </div>
    )
}

export default Todo;