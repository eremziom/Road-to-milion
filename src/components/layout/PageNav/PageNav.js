import React from 'react';
import {NavLink} from 'react-router-dom';

const PageNav = () => {
  return (
    <nav>
      <NavLink to={process.env.PUBLIC_URL + '/'} activeClassName='active'>Home</NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/login'} activeClassName='active'>Login</NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/register'} activeClassName='active'>Register</NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/dashboard'} activeClassName='active'>Dashboard</NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/datarecorder'} activeClassName='active'>DataRecorder</NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/instruments'} activeClassName='active'>Instruments</NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/stats'} activeClassName='active'>Stats</NavLink>
    </nav>
  );
};

export default PageNav;
