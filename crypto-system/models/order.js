module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    crypto_id: DataTypes.INTEGER,
    type: DataTypes.ENUM('buy', 'sell'),
    amount: DataTypes.FLOAT,
    price: DataTypes.FLOAT
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'user_id' });
    Order.belongsTo(models.Cryptocurrency, { foreignKey: 'crypto_id' });
  };

  return Order;
};
