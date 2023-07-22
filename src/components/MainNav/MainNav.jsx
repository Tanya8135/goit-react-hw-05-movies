import Cast from 'pages/MovieDetails/Cast/Cast';
import Reviews from 'pages/MovieDetails/Reviews/Reviews';

const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Cast />
        </li>
        <li>
          <Reviews />
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
