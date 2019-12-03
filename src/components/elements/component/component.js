import React from 'react';
import styles from './component.module.scss';
import PropTypes from 'prop-types';

const Component = ({children}) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export default Component;
