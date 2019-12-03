import React from 'react';
import styles from './wrapper.module.scss';
import PropTypes from 'prop-types';

const Wrapper = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
