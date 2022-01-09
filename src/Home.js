import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState} from 'react';
import TodoList from './TodoList';



const Home = () => {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);


    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    useEffect(() => {
        fetch('http://localhost:8000/todos')
        .then(res => {if(!res.ok) {
            throw Error('could not fetch the data from resource')
        }
            return res.json(); 
        })
        .then(data => {
            setTodos(data)
        })
        .catch(err => {
            setError(err.message)
        })
    }, []);


    return (
       <div className="home">
           <div className="add">
                <a href="/create" className="add-icon">
                    <FontAwesomeIcon icon={faPlus} color="white" />
                </a>
            </div>
            <div>
               {todos && <TodoList todos={todos} handleDelete={handleDelete}/>}
            </div>
       </div> 
    );
}
 
export default Home;