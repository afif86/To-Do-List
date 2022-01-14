import { useState } from "react";
import Setting from "./Setting";
import {useHistory} from "react-router-dom";


const TodoList = ({ todos, handleDone}) => {
    const [todosState, setTodo] = useState(todos);
    const history = useHistory();

    function styleHandler(e, id, done) {
        const newTodos = todosState.map(todo => {
            if(todo.id === id){
                todo.done = !done;
            }
            return todo
        });
        setTodo(newTodos);
        fetch(Setting.url +id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({done:!done})
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
                    <div style={{textDecoration:todo.done ? 'line-through' : ""}}>
                        <h3>{todo.title}</h3>
                        <p>{todo.body}</p>
                        <p>{todo.date}</p>
                        </div>

                    <div className='featuress'>
                        <button onClick={() =>  history.push() }>EDIT</button>
                        <button onClick={(e) => styleHandler(e,todo.id, todo.done)}>{todo.done ? 'UNDO' : 'DONE'}</button>
                        <button onClick={() => handleDelete(todo.id)}>DELETE</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default TodoList;