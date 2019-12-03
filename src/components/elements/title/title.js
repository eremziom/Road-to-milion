import React from 'react';
import styles from './title.module.scss';
import PropTypes from 'prop-types';

const Title = ({children}) => {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
