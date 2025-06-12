const { Order, User, Cryptocurrency } = require('../models');

exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username', 'email'],
        },
        {
          model: Cryptocurrency,
        },
      ],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders', details: error.message });
  }
};


exports.createOrder = async (req, res) => {
  const { user_id, crypto_id, type, amount, price } = req.body;

  if (!user_id || !crypto_id || !type || !amount || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const order = await Order.create({ user_id, crypto_id, type, amount, price });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order', details: error.message });
  }
};


