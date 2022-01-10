import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
  const { id } = useParams();
  const { data: todo, error, isPending } = useFetch('http://localhost:8000/todos/' + id);

  return (
    <div className="todo-details">
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {todo && (
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.body}</p>
          </div>
      )}
    </div>
  );
};

export default TodoDetails;
