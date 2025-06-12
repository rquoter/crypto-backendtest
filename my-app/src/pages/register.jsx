import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password
      });
      alert('Registered! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="block w-full mb-3 p-2 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</button>
    </form>
  );
}
