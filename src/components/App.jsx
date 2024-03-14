import { Routes, Route } from "react-router-dom"
import Navigation from "./Navigation/Navigation"
import Loader from "./Loader/Loader";
import { Suspense, lazy } from "react"



const HomePage = lazy(() => import('../pages/HomePage'));

const MoviesPages = lazy(() => import('../pages/MoviesPage'));

const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'))

const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));

const MovieReviews = lazy(() => import('../components/MovieReviews/MovieReviews'))


export default function App() {
  return (
    <>
      <h1>Film search</h1>

      <Navigation />
      
      <div>
        <Suspense fullback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPages />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />


            </Route>
            {/* <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>

              <Route path="cast" element={<MovieInfo />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        
      </div>
    </>
  );
}