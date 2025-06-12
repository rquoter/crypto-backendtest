module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cryptocurrencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbol: Sequelize.STRING,
      name: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Cryptocurrencies');
  }
};