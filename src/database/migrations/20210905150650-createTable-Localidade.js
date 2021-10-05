"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Localidade", {
        id_localidade: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.DataTypes.DOUBLE,
          allowNull: false,
        },
        latitude: {
          type: Sequelize.DataTypes.DOUBLE,
          allowNull: false,
        },
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
