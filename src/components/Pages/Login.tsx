import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
  const [token, setToken] = useState('');

const handleLogin = async () => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    console.log('Login request:', params.toString());

    const response = await axios.post('http://127.0.0.1:8000/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const token = response.data.access_token;
    if (token) {
      localStorage.setItem('access_token', token);
      console.log('JWT Token stored:', token);
      navigate('/products');
    } else {
      throw new Error('No token received');
    }
  } catch (error: any) {
    console.error('Login failed:', error.response?.data || error.message);
    alert('Invalid credentials. Please try again.');
  }
};


  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>

      {token && (
        <div style={{ marginTop: '1rem' }}>
          <strong>JWT Token:</strong>
          <pre>{token}</pre>
        </div>
      )}
    </div>
  );
};

export default Login;