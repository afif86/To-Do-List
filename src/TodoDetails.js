import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Setting from './Setting';

const TodoDetails = () => {
  const { id } = useParams();
  const { data: todo, error, isPending } = useFetch(Setting.url + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(Setting.url + todo.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
}

  return (
    <div className="todo-details">
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {todo && (
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.body}</p>
          <button onClick={handleClick}>Delete</button>
          </div>
      )}
    </div>
  );
};

export default TodoDetails;
