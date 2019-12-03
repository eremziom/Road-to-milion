import React from 'react';
import styles from './input.module.scss';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Input = ({children}) => {
  return (
    <TextField className={styles.input}>
      {children}
    </TextField>
  );
};

Input.propTypes = {
  children: PropTypes.node,
};

export default Input;
