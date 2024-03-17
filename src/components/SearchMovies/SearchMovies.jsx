import { useSearchParams } from 'react-router-dom';
import css from './SearchMovies.module.css'
import { FaSearch } from "react-icons/fa";

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
        <div className={css.container}>
            <form onSubmit={hundleSubmit}>
                <h2 className={css.title}>We`ll help you find a movie <FaSearch /></h2>
                <label>   
                    <input
                        className={css.input}
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
