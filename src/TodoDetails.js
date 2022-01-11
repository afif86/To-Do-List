import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
  const { id } = useParams();
  const { data: todo, error, isPending } = useFetch('http://localhost:8000/todos/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/todos/' + todo.id, {
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
