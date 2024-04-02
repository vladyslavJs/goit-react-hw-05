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
                <h2 className={css.title}>We`ll help you find a movie <FaSearch className={css.icon} /></h2>
                <p className={css.info}>Here you can find movies of various genres - from action and comedy to drama and science fiction. Our extensive selection of films caters to the tastes of any viewer, regardless of their preferences and mood. Enjoy your viewing experience!</p>
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
