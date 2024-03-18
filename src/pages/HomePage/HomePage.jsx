import fetchMoviesData from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css"

import { ImFire } from "react-icons/im";


import { useEffect, useState } from "react";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                setError(false);
                const data = await fetchMoviesData('/trending/movie/day');
                setMovies(data.results);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);


    return (
        <div>
            <h1 className={css.title}>Popular movies of our time</h1>
            {loading && <Loader />} 
            {error && <ErrorMessage />}
            
            <MovieList movies={movies} />
            
        </div>   
    );
}