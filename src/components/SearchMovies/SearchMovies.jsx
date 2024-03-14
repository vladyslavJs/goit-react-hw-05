import { useSearchParams } from 'react-router-dom';

export default function SearchMovies() {
    const [params, setParams] = useSearchParams();
    const queryFilter = params.get('query') ?? '';

    const changeFilter = newFilter => {
        params.set('query', newFilter.trim());
        setParams(params);
    }
    
    const hundleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        form.reset();
    }

    return (
        <div>
            <form onSubmit={hundleSubmit}>
                <label>
                    <input
                        type="text"
                        name="search"
                        autoFocus
                        placeholder="Enter the movie title"
                        value={queryFilter}
                        onChange={e => changeFilter(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}
