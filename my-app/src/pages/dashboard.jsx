import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/orders', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => setOrders(res.data))
      .catch(err => alert('Failed to fetch orders'));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.map(order => (
        <div key={order.id} className="mb-4 p-4 border rounded shadow">
          <p><strong>Type:</strong> {order.type}</p>
          <p><strong>Crypto:</strong> {order.Cryptocurrency?.symbol}</p>
          <p><strong>Amount:</strong> {order.amount}</p>
          <p><strong>Price:</strong> ${order.price}</p>
        </div>
      ))}
    </div>
  );
}