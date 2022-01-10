import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState} from 'react';
import TodoList from './TodoList';
import useFetch from './useFetch';



const Home = () => {
    const { data: todos, isPending, error } = useFetch('http://localhost:8000/todos');
    const [data, setData] = useState(null);

    const handleDelete = (id) => {
        const newTodos = data.filter(todo => todo.id !== id);
        setData(newTodos);
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            <div className="add">
                <a href="/create" className="add-icon">
                    <FontAwesomeIcon icon={faPlus} color="white" />
                </a>
            </div>
            <div>
                {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
            </div>
        </div>
    );
}
 
export default Home;