/* istanbul ignore file */

const { PrimaryKey, DateNowNotNull } = require("../Object");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Conteudo",
        {
          id_conteudo: PrimaryKey(Sequelize),
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
          data_submissao: DateNowNotNull(Sequelize),
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
      await queryInterface.dropEnum("enum_Conteudo_status");
    } catch (e) {
      console.log(e);
    }
  },
};
