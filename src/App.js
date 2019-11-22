import React from 'react';
//import styles from './App.module.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register';
import Stats from './components/views/Stats/Stats';
import Instruments from './components/views/Instruments/Instruments';
import Instrument from './components/views/Instrument/Instrument';
import DataRecorder from './components/views/DataRecorder/DataRecorder';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/register'} component={Register} />
          <Route exact path={process.env.PUBLIC_URL + '/datarecorder'} component={DataRecorder} />
          <Route exact path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/stats'} component={Stats} />
          <Route exact path={process.env.PUBLIC_URL + '/instruments'} component={Instruments} />
          <Route exact path={process.env.PUBLIC_URL + '/instruments/:id'} component={Instrument} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
