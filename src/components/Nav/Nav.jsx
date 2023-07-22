import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import style from './Nav.module.css';

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={style.listNav}>
        <li className={style.itemNav}>
          <NavLink
            to="/"
            className={location.pathname === '/' ? style.active : ''}
          >
            Home
          </NavLink>
        </li>
        <li className={style.itemNav}>
          <NavLink
            to="/movies"
            className={location.pathname === '/movies' ? style.active : ''}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
