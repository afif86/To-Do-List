import { useState } from "react";
import { Link } from "react-router-dom";
import Setting from "./Setting";



const TodoList = ({ todos, handleDone}) => {
    const [todosState, setTodo] = useState(todos);


    function styleHandler(e, id, done) {
        e.preventDefault();
        e.target.parentNode.previousSibling.style.textDecoration = done ? 'line-through' : "";
        fetch(Setting.url +id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({done:!done})
        }).then(() => {
            window.location.reload();
        })
    }

    const handleDelete  = (id) => {
        const newTodos = todosState.filter(todo => todo.id !== id);
        setTodo(newTodos);
        fetch(Setting.url + id, {
            method: 'DELETE'
          }).then(() => {
          console.log('success')
          })
    }


    return (
        <div className="todo-list">
            {todosState.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <Link to={`/todos/${todo.id}`} style={{textDecoration:todo.done ? 'line-through' : ""}}>
                            <h3>{todo.title}</h3>
                            <p>{todo.body}</p>
                        </Link>

                    <div className='featuress'>
                        <button>EDIT</button>
                        <button onClick={(e) => styleHandler(e,todo.id, todo.done)}>{todo.done ? 'UNDO' : 'DONE'}</button>
                        <button onClick={() => handleDelete(todo.id)}>DELETE</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default TodoList;