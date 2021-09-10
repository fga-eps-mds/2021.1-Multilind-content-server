"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Lingua", {
        id_lingua: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        id_conteudo: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Conteudo",
            key: "id_conteudo",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
    await queryInterface.dropTable("Lingua");
  },
};
