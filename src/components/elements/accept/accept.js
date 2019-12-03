import React from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import styles from './accept.module.scss';

const AcceptButton = () => {
  return (
    <div>
      <Button className={styles.button} variant="contained" color="primary" startIcon={<CheckIcon />}>Accept</Button>
    </div>
  );
};

export default AcceptButton;
