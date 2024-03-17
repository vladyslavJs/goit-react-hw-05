import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import fetchMoviesData from '../../movies-api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

// import clsx from 'clsx';

import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMoviesData(`/movie/${movieId}`, movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.main}>
      <Link to={backLinkRef.current}>
        <IoMdArrowBack className={css.icon} />
      </Link>

      {loading && <Loader />}

      {error && (
        <ErrorMessage>
          Something went wrong! Please reload the page 🚩
        </ErrorMessage>
      )}

      <div className={css.container}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={`${movie.title} poster`}
          className={css.photo}
        />
        <div className={css.description}>
          <h1>{movie.title}</h1>
          {movie.tagline && (
            <p>
              <i>{`"${movie.tagline}"`}</i>
            </p>
          )}
          {movie.overview && (
            <p>
              <span>Overview:</span> {movie.overview}
            </p>
          )}

          {movie.genres && movie.genres.length > 0 && (
            <p>
              <span>Genres:</span>{' '}
              {movie.genres.map(genre => genre.name).join(', ')}
            </p>
          )}

          {movie.vote_average > 0 && (
            <p>
              <span>Average rating:</span>{' '}
              {Math.floor(movie.vote_average)} / 10 ⭐
            </p>
          )}

          {movie.vote_count > 0 && (
            <p>
              <span>Vote count:</span>{' '}
              {Math.floor(movie.vote_count)}
            </p>
          )}

          {movie.release_date && (
            <p>
              <span>Release date:</span>{' '}
              {movie.release_date}
            </p>
          )}

          {!loading && (
            <nav>
              <NavLink
                to="cast"
                className={css.extraPage}
              >
                Cast
              </NavLink>
              <NavLink
                to="reviews"
                className={css.extraPage}
              >
                Reviews
              </NavLink>
            </nav>
          )}
        </div>
      </div>

      <Suspense fullback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}