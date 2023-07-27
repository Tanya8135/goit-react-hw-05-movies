import { Link, Outlet } from 'react-router-dom';

const MainNav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainNav;
