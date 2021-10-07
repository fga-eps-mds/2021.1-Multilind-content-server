"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("Idioma", {
        id_localidade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "localidade",
            key: "id_localidade",
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
        }
      },
        {
          uniqueKeys: {
            unique_idioma_localidade_lingua: {
              fields: ['id_localidade', 'id_lingua']
            }
          }
        });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Idioma");
  },
};