import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TodoList from './TodoList';
import useFetch from './useFetch';
import Setting from './Setting';



const Home = () => {
    const { data: todo, isPending, error } = useFetch(Setting.url);

    
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
                {todo && <TodoList todos={todo} />}
            </div>
        </div>
    );
}
 
export default Home;