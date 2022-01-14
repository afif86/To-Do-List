import { useState } from "react";
import { Link } from "react-router-dom";
// import useFetch from "./useFetch";
import Setting from "./Setting";



const TodoList = ({ todos, handleDone}) => {
    const [todosState, setTodo] = useState(todos);

    function styleHandler(e, id) {
        e.preventDefault();
        e.target.parentNode.previousSibling.style.textDecoration = "line-through";
        fetch(Setting.url +id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({done:true})
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
                        <button onClick={(e) => styleHandler(e,todo.id)}>DONE</button>
                        <button onClick={() => handleDelete(todo.id)}>DELETE</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default TodoList;