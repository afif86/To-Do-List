import { useState } from "react";
import { Link } from "react-router-dom";



const todoList = ({ todos, handleDone}) => {
    const [todoa, setTodo] = useState('');

    function styleHandler(e) {
        e.preventDefault();
        e.target.parentNode.previousSibling.style.textDecoration = "line-through";
    }
    
    const handleDelete  = (id) => {
        const newTodos = todo.filter(todo => todo.id !== id);
        setData(newTodos);
    }


    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                        <Link to ={`/todos/${todo.id}`}>
                            <h3>{todo.title}</h3>
                            <p>{todo.body}</p>
                        </Link>

                    <div className='featuress'>
                        <button>EDIT</button>
                        <button onClick={styleHandler}>DONE</button>
                        <button onClick={() => handleDelete(todo.id)}>DELETE</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default todoList;