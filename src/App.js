
import './App.css';

import React from 'react';
import Profile from './Profile';

import Statistics from './Stat';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Profile />
      <Statistics title="Upload stats" stats={data} />
     </div>
          
  );
}

export default App;