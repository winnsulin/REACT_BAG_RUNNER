import React, { useState } from 'react';
import axios from 'axios';

const API = "https://pham-csc39616-tob.onrender.com/";

function Auth({ setToken }) {
  const [form, setForm] = useState({ username: '', password: '', name: '' });
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await axios.post(`${API}/signup`, form);
        alert("Signup successful!");
      } else {
        const res = await axios.post(`${API}/signin`, form);
        setToken(res.data.token);
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>

      {isSignup && (
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      )}

      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />

      <br />
      <button onClick={handleSubmit}>Submit</button>

      <p onClick={() => setIsSignup(!isSignup)} style={{ cursor: 'pointer' }}>
        {isSignup ? "Sign in" : "Create account"}
      </p>
    </div>
  );
}

export default Auth;