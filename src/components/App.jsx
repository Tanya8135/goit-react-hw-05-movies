import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from './SharedLayout';

import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.boxApp}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
