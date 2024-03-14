import SearchMovies from '../components/SearchMovies/SearchMovies'
import fetchMoviesData from '../movies-api';
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


export default function MoviesPages() {
    const [movies, setMovies] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [params] = useSearchParams();

    const queryFilter = params.get('query') ?? '';

    useEffect(() => {
        if (!queryFilter) return;

        const getData = async () => {
            try {
                setIsLoading(true);
                setError(false);
                setMovies([]);
                const data = await fetchMoviesData('/search/movie', queryFilter);

                if (data.results.length === 0 && queryFilter !== '') {
          
                    return;
                }

                setMovies(data.results);
            } catch (error) {
        
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [queryFilter]);

    return (
        <>
            <SearchMovies />
            {loading && <Loader />}

            {error && <ErrorMessage />}

            <MovieList movies={movies} />
        </>

    ); 
}