import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL, API_KEY } from '../../api/config';

import style from './Movies.module.css';

const Movies = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchRequest, setSearchRequest] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = () => {
    handleSearch(searchRequest);
    updateQueryMovie(searchRequest);
  };

  const handleSearch = async () => {
    try {
      const options = {
        method: 'GET',
        url: `${API_URL}/search/movie`,
        params: {
          query: searchRequest,
          language: 'en-US',
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      };

      const resp = await axios.request(options);
      const movies = resp.data.results;
      setSearchResults(movies);
    } catch (err) {
      console.log(err);
    }
  };

  const updateQueryMovie = name => {
    const nextParams = name !== '' ? { name: name } : {};
    setSearchParams(nextParams);
  };

  const handleInputChange = e => {
    setSearchRequest(e.target.value);
    updateQueryMovie(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
      updateQueryMovie(searchRequest);
    }
  };

  return (
    <div className={style.boxMovies}>
      <h2 className={style.titleHome}>Movies</h2>
      <div className={style.search}>
        <input
          type="text"
          placeholder="Enter name"
          value={searchRequest}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={style.input}
        />

        <button onClick={handleSubmit} className={style.btnSearch}>
          Search
        </button>
      </div>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id} className={style.itemMovie}>
            <NavLink
              to={`/movies/${movie.id}`}
              state={{ from: '/movies' }}
              className={style.textColor}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
