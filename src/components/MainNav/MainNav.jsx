import { Link, Outlet, useLocation } from 'react-router-dom';

const MainNav = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainNav;
