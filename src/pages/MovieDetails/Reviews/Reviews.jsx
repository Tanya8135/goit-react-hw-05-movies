import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, API_KEY } from 'api/config';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const [reviewsVisible, setReviewsVisible] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const options = {
          method: 'GET',
          url: `${API_URL}/movie/${movieId}/reviews`,
          params: {
            api_key: API_KEY,
            language: 'en-US',
            reviews: true,
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        const resp = await axios.request(options);
        setReviews(resp.data.results);
      } catch (err) {
        console.error(err);
        setErr('Error fetching Reviews');
      }
    };

    fetchReviews();
  }, [movieId]);

  const handleToggleReviews = () => {
    setReviewsVisible(prevReviwsVisable => !prevReviwsVisable);
  };

  if (err) {
    return <div>{err}</div>;
  }

  if (reviews.length === 0) {
    return <div>No information</div>;
  }

  return (
    <div>
      {reviewsVisible ? (
        <div>
          {reviews.map(review => (
            <div key={review.id}>
              <h3 className={css.author}>Author: {review.author}</h3>
              <p className={css.infoAuthor}>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}

      <div className={css.boxBtn}>
        <button onClick={handleToggleReviews} className={css.btn}>
          {reviewsVisible ? 'Close' : ' Show Reviws'}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
