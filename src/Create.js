import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');

    return (
        <div className="create">
            <h2>Add a new To-Do </h2>
            <form>
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
                    
                />
                <label for="Deadline">Date:</label>
                <input
                    type="date"
                    id="start"
                    name="todo-start"
                    required
                />
                <button>Add</button>
            </form>
        </div>
    );
}
 
export default Create;