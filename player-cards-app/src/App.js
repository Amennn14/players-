import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
