import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.scss';

const PageNav = () => {
  return (
    <nav>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/'} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/login'} activeClassName='active'>Login</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/register'} activeClassName='active'>Rejestracja</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/dashboard'} activeClassName='active'>Panel</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/datarecorder'} activeClassName='active'>Dodaj Paczkę</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/instruments'} activeClassName='active'>Instrumenty</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/stats'} activeClassName='active'>Statystyki</Button>
    </nav>
  );
};

export default PageNav;
