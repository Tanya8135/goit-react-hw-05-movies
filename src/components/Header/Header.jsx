import React from 'react';
import Nav from 'components/Nav/Nav';

import css from './Header.module.css';

const Header = ({ children }) => {
  return (
    <div className={`${css.headerNav}`}>
      <div className={css.headerLine}>
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default Header;
