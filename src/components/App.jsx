import { Routes, Route } from "react-router-dom"
import Navigation from "./Navigation/Navigation"
import HomePage from "../pages/HomePage";
import MoviesPages from "../pages/MoviesPages"
import NotFoundPage from "../pages/NotFoundPage";


export default function App() {
  return (
    <div>
      <h1>Film search</h1>

      <Navigation />
      

      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/movies" element={ <MoviesPages/>} />
        <Route path="*" element={ <NotFoundPage />} />
      </Routes>
    </div>
  );
}