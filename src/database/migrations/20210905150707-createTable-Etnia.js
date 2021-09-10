"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Etnia", {
        id_etnia: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        id_conteudo: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        nome: {
          type: Sequelize.DataTypes.STRING,
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
    await queryInterface.dropTable("Etnia");
  },
};
