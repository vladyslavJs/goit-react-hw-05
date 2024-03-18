import { Routes, Route } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import Loader from "../Loader/Loader";
import { Suspense, lazy } from "react"
import css from './App.module.css'


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'))

const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const MovieCast = lazy(() => import('../MovieCast/MovieCast'));

const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))


export default function App() {
  return (
    <>
      <Navigation />
      <div className={css.contiainer}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}