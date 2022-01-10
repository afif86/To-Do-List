import { useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newTodos = data.filter(todo => todo.id !== id);
        setData(newTodos);
    }

    useEffect(() => {
        fetch(url)
        .then(res => {if(!res.ok) {
            throw Error('could not fetch the data from resource')
        }
            return res.json(); 
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
        })
    }, [url]);

    return { data, isPending, error };
}


export default useFetch;