import React from 'react';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './cancel.module.scss';

const CancelButton = () => {
  return (
    <div>
      <Button className={styles.button} variant="contained" color="primary" startIcon={<CancelIcon />}>Cancel</Button>
    </div>
  );
};

export default CancelButton;
