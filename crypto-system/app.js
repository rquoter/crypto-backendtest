const express = require('express');
const app = express();
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const { authMiddleware } = require('./controllers/authController');

app.use(express.json());
app.use('/orders', orderRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
