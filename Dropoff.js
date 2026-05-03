import React, { useState } from 'react';
import axios from 'axios';

const API = "https://pham-csc39616-tob.onrender.com/";

function Dropoff({ token }) {
  const [gate, setGate] = useState('');

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${API}/gate/${gate}`, {
        headers: { Authorization: token }
      });

      alert(`Dropped bags at gate ${gate}`);
    } catch (err) {
      alert("Error deleting");
    }
  };

  return (
    <div>
      <h2>Drop Off Bags</h2>

      <input
        placeholder="Gate (e.g. B12)"
        onChange={(e) => setGate(e.target.value)}
      />

      <button onClick={handleDelete}>Drop Bags</button>
    </div>
  );
}

export default Dropoff;