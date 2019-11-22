import React from 'react';
//import styles from './MainLayout.module.scss';
import PageNav from '../PageNav/PageNav';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
  return (
    <div>
      <PageNav />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
