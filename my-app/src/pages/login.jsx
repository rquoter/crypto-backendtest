import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
    </form>
  );
}
