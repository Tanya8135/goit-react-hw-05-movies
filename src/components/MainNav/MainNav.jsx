import { Link, Outlet, useParams } from 'react-router-dom';

const MainNav = () => {
  const { movieId } = useParams();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            {/* <Link to="reviews">Reviews</Link> */}
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainNav;
