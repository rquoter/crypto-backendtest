module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    type: DataTypes.ENUM('deposit', 'withdrawal', 'exchange'),
    amount: DataTypes.FLOAT
  });
  Transaction.associate = models => {
    Transaction.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Transaction;
};