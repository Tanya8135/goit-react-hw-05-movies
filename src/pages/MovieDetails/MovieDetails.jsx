import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL, API_KEY } from 'api/config';

import MainNav from 'components/MainNav';
import css from './MovieDetails.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [err, setErr] = useState(null);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: 'GET',
          url: `${API_URL}/movie/${movieId}`,
          params: {
            api_key: API_KEY,
            language: 'en-US',
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        const resp = await axios.request(options);
        setMovie(resp.data);
      } catch (err) {
        console.error(err);
        setErr('Error fetching movie details');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (err) {
    return <div>{err}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : defaultImg;

  return (
    <div className={css.boxMovieDetails}>
      <Link to={backLink}>
        <button className={css.btnBack}>&larr; Go back</button>
      </Link>

      <div className={css.generalBox}>
        <img src={posterSrc} alt={movie.title} />

        <div className={css.rating}>
          <h2 className={`${css.title} ${css.nameMovie}`}>{movie.title}</h2>
          <p className={css.titleBottom}>
            <span className={`${css.title} ${css.title__Name}`}>Rating:</span>{' '}
            {movie.vote_average}
          </p>
          <p className={css.titleBottom}>
            <span className={`${css.title} ${css.title__Name}`}>Genre(s):</span>{' '}
            {movie.genres.map(genre => genre.name).join(', ')}
          </p>
          <h3 className={`${css.title} ${css.titleBottom}`}>Owerview</h3>
          <p className={css.text}>{movie.overview}</p>
        </div>
      </div>

      <MainNav />
    </div>
  );
};

export default MovieDetails;
