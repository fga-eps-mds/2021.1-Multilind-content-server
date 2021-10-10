const { PrimaryKey, StringNotNull } = require("../Object");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Palavra", {
        id_palavra: PrimaryKey(Sequelize),
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
        nome: StringNotNull(Sequelize),
        significado: StringNotNull(Sequelize),
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Palavra");
  },
};
