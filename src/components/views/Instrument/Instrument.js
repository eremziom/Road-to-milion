import React from 'react';

const Instrument = () => {
  let path = window.location.pathname.split('/');
  let instrumentId = path[2];


  return (
    <div>
      <h2>Instrument o ID = {instrumentId}</h2>
    </div>
  );
};

export default Instrument;
