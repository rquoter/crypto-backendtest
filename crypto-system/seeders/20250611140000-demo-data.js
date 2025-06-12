module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'alice',
        email: 'alice@test.com',
        password_hash: 'hashed1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'bob',
        email: 'bob@test.com',
        password_hash: 'hashed2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('Cryptocurrencies', [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Cryptocurrencies', null, {});
  }
};
