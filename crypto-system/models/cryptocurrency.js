module.exports = (sequelize, DataTypes) => {
  const Cryptocurrency = sequelize.define('Cryptocurrency', {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING
  });
  Cryptocurrency.associate = models => {
    Cryptocurrency.hasMany(models.Order, { foreignKey: 'crypto_id' });
  };
  return Cryptocurrency;
};
