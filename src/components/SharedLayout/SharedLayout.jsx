import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
