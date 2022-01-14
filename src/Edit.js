import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Setting from "./Setting";

const Edit = () => {
    const { id } = useParams();
    const [called, setCalled] = useState(false)
    const [ todo, setTodo ] = useState(    {
        "title": "place holder state",
        "body": "place holder sate",
        "date": "2022/5/1",
        "done": false,
        "id": 1
      })
    useEffect(() => {
        // Update the document title using the browser API
        if (!called) {
            fetch(Setting.url + id).then((res) => res.json()).then(data => { setTodo(data); setCalled(true) })
            
        }
      });

    return (
        <div className="create">
            <form onSubmit={()=> console.log('form submit')}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    value={todo.title}
                    onChange={()=> console.log('form submit')}
                />
                <label >Description:</label>
                <textarea
                    className="description"
                    type="text"
                    value={todo.body}
                    onChange={()=> console.log('form submit')}
                />
                <label >schedule:</label>
                <input
                    type="date"
                    id="start"
                    name="todo-start"
                    required
                    value={todo.date}
                    onChange={()=> console.log('form submit')}
                />
                <button>Save</button>
                
            </form>
        </div>
    );
}
 
export default Edit;