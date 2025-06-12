module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: Sequelize.INTEGER,
      crypto_id: Sequelize.INTEGER,
      type: {
        type: Sequelize.ENUM('buy', 'sell')
      },
      amount: Sequelize.FLOAT,
      price: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Orders');
  }
};