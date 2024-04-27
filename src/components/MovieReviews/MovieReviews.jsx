import css from './MovieReviews.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../Loader/Loader';
import fetchMoviesData from '../../movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!movieId) return;

        const getData = async () => {
            try {
                setIsLoading(true);
                setError(false);
                const data = await fetchMoviesData(`/movie/${movieId}/reviews`, movieId);
                setReviews(data.results);
            } catch (error) {
                setError(true);
            }
            finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [movieId]);

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
        
    return (
        <div className={css.container}>
            {loading && <Loader />}
            {reviews.length > 0 ? (
                <div className={css.wrapper}>
                    {!loading && (
                        <ul>
                            {reviews.map(
                                ({
                                    id,
                                    content,
                                    author_details: { name, username, rating, avatar_path },
                                }) => (
                                    <li className={css.item} key={id}>
                                        <img
                                            className={css.image}
                                            src={
                                                avatar_path
                                                    ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                                                    : defaultImg
                                            }
                                            alt={`${username} avatar`}
                                        />
                                        <div className={css.description}>
                                            <div className={css.nameWrapper}>
                                                {username && (
                                                    <p>
                                                        <b>{username}</b>
                                                    </p>
                                                )}
                                                {name && (
                                                    <p className={css.name}>
                                                        <i>{name}</i>
                                                    </p>
                                                )}
                                            </div>
                                            {rating && <p>{rating} / 10 ⭐</p>}
                                            <p className={css.comment}>{content}</p>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                </div>
            ) : (
                !loading && (
                    <p className={css.reviews}>
                        Users have not yet written a reviews about this movie. You can be the first!
                    </p>
                )
            )}
            {error && <ErrorMessage />}
        </div>
    );
}
    




