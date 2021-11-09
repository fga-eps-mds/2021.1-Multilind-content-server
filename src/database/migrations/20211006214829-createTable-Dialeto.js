"use strict";
/* istanbul ignore file */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Dialeto",
        {
          id_etnia: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "Etnia",
              key: "id_etnia",
            },
            onUpdate: "RESTRICT",
            onDelete: "RESTRICT",
          },
          id_lingua: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "Lingua",
              key: "id_lingua",
            },
            onUpdate: "RESTRICT",
            onDelete: "RESTRICT",
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
        },
        {
          uniqueKeys: {
            unique_dialeto_etnia_lingua: {
              fields: ["id_etnia", "id_lingua"],
            },
          },
        }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Dialeto");
  },
};
