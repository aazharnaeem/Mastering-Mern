

const TodoList = () => {

    const todos = [{ todo: 'first' }, { todo: 'second' }, { todo: 'third' }]
    return (
        <div>
            {
                todos.map((val, key) => {

                    return (
                        <div key={key} style={{ 
                            border: "solid black 1px", display: 'flex',flexWrap:'wrap' ,justifyContent:'space-between' }} >
                            <div>
                            <strong>
                                {key+1}. &ensp;
                            </strong>
                                {val.todo}
                            </div>
                            <div>
                            <button>Edit</button>
                            <button>delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TodoList