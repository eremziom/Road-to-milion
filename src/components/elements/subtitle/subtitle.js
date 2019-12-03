import React from 'react';
import styles from './subtitle.module.scss';
import PropTypes from 'prop-types';

const Subtitle = ({children}) => {
  return (
    <p className={styles.subtitle}>
      {children}
    </p>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node,
};

export default Subtitle;
