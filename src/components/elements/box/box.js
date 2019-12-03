import React from 'react';
import styles from './box.module.scss';
import PropTypes from 'prop-types';

const Box = ({children}) => {
  return (
    <div className={styles.box}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
};

export default Box;
