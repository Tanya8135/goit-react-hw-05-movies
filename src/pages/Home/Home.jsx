import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { API_URL, API_KEY } from '../../api/config';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const options = {
          method: 'GET',
          url: `${API_URL}/trending/all/day`,
          params: { language: 'en-US' },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        const resp = await axios.request(options);
        const trendingMovies = resp.data.results;
        setMovies(trendingMovies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className={css.boxMovies}>
      <h1 className={css.titleHome}>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={css.itemMovie}>
            <NavLink to={`/movies/${movie.id}`} className={css.textColor}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
