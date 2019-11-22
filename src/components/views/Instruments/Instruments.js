import React from 'react';
import {Link} from 'react-router-dom';

const Instruments = () => {
  return (
    <div>
      <h2>Instruments</h2>
      <Link to={process.env.PUBLIC_URL + '/instruments/id'}>Instrument ID</Link>
    </div>
  );
};

export default Instruments;
