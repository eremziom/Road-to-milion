import React from 'react';
import styles from './Homepage.module.scss';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import Box from '../../elements/box/box';
import Component from '../../elements/component/component';
import Wrapper from '../../elements/wrapper/wrapper';

const Homepage = () => {
  return (
    <Component>
      <Box>
        <h2 className={styles.text}>Grab your first milion with us</h2>
        <TrendingUpIcon className={styles.icon}/>
      </Box>
      <Wrapper>
        <Button className={styles.button} component={NavLink} to={process.env.PUBLIC_URL + '/login'} variant="contained" color="primary">Login</Button>
        <Button className={styles.button} component={NavLink} to={process.env.PUBLIC_URL + '/register'}variant="contained" color="primary">Register</Button>
      </Wrapper>
    </Component>
  );
};

export default Homepage;
