import React from 'react';
import styles from './Homepage.module.scss';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const Homepage = () => {
  return (
    <div className={styles.component}>
      <div className={styles.box}>
        <h2 className={styles.text}>Grab your first milion with us</h2>
        <TrendingUpIcon className={styles.icon}/>
      </div>
      <div className={styles.wrapper}>
        <div >
          <Button className={styles.button} component={NavLink} to={process.env.PUBLIC_URL + '/login'} variant="contained" color="primary">Login</Button>
        </div>
        <div>
          <Button className={styles.button} component={NavLink} to={process.env.PUBLIC_URL + '/register'}variant="contained" color="primary">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
