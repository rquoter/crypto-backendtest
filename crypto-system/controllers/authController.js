const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = '12345'; // Replace with process.env.SECRET in production

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const password_hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password_hash });
    res.status(201).json({ id: user.id, username, email });
  } catch (err) {
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Missing token' });

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
