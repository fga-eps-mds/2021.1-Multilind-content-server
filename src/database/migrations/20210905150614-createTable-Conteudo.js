"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Conteudo",
        {
          id_conteudo: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          status: {
            type: Sequelize.DataTypes.ENUM([
              "aprovado",
              "reprovado",
              "pendente",
            ]),
            defaultValue: "pendente",
            allowNull: false,
            enumName: "enum_Conteudo_status",
          },
          data_submissao: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
            allowNull: false,
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Conteudo");
    try {
      await queryInterface.sequelize.dropEnum("enum_Conteudo_status");
    } catch (e) {
      console.log(e);
    }
  },
};
