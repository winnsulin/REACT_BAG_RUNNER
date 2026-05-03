import React, { useState } from 'react';
import Pickup from './Pickup';
import Dropoff from './Dropoff';
import Auth from './Auth';

function App() {
  const [view, setView] = useState('pickup');
  const [token, setToken] = useState(null);

  if (!token) {
    return <Auth setToken={setToken} />;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bag Runner</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => setView('pickup')}>Pick Up</button>
        <button onClick={() => setView('dropoff')}>Drop Off</button>
      </div>

      {view === 'pickup' ? <Pickup token={token} /> : <Dropoff token={token} />}
    </div>
  );
}

export default App;