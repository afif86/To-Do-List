import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [schedule, setSchedule] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { title, body, schedule };
        setIsPending(true);
        
        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(todo)
        }).then(() => {
            console.log('new todo added');
            setIsPending(false);
            history.push('/');
        })

        
    }

    return (
        <div className="create">
            <h2>Add a new To-Do </h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Description:</label>
                <textarea
                    className="description"
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label >schedule:</label>
                <input
                    type="date"
                    id="start"
                    name="todo-start"
                    required
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                />
                {!isPending && <button>Add</button>}
                {isPending && <button>Add todo...</button>}
                
            </form>
        </div>
    );
}
 
export default Create;