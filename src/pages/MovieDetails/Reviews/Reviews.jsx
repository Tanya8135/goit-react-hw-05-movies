import { useEffect, useState } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, API_KEY } from 'api/config';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

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

  const handleToggleReviws = () => {
    setShowReviews(prevShowReview => !prevShowReview);
  };

  if (err) {
    return <div>{err}</div>;
  }

  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={css.reviews}>
        {/* <Link
          to="reviews"
          onClick={handleToggleReviws}
          className={`${showReviews ? css.active : ''} ${css.detailsInfo}`}
        >
          Reviews
        </Link> */}
      </div>

      {showReviews && (
        <>
          {reviews && reviews.length > 0 ? (
            <div>
              {reviews.map(review => (
                <div key={review.id}>
                  <h3 className={css.author}>Author: {review.author}</h3>
                  <p className={css.infoAuthor}>{review.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>No Information</div>
          )}

          <div className={css.boxBtn}>
            <button onClick={handleToggleReviws} className={css.btn}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
