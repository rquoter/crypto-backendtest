module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: 'user_id' });
    User.hasMany(models.Transaction, { foreignKey: 'user_id' });
  };

  return User;
};
