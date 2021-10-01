"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Falada", {
        id_falada: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        id_localidade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Localidade",
            key: "id_localidade",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        id_lingua: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Lingua",
            key: "id_lingua",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Tronco");
  },
};
