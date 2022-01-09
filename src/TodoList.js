const todoList = ({todos, handleDelete}) => {

    function styleHandler(e) {
        e.preventDefault();
        e.target.parentNode.previousSibling.style.textDecoration = "line-through";
      }

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <div>
                            <h3>{todo.title}</h3>
                            <p>{todo.body}</p>
                        </div>
                    <div className='featuress'>
                        <button>EDIT</button>
                        <button onClick={styleHandler}>DONE</button>
                        <button  onClick={() => handleDelete(todo.id)}>DELETE</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default todoList;