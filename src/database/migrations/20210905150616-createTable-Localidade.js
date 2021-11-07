/* istanbul ignore file */

const { PrimaryKey, FloatNotNull } = require("../Object");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Localidade", {
        id_localidade: PrimaryKey(Sequelize),
        longitude: FloatNotNull(Sequelize),
        latitude: FloatNotNull(Sequelize),
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Localidade");
  },
};
