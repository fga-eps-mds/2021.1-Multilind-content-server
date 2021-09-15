const databaseConfig = require("../../config/database");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Palavra = sequelize.define(
  "Palavra",
  {
    id_palavra: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_lingua: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Lingua",
        key: "id_lingua",
      },
      unUpdate: "CASCADE",
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
    nome: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    significado: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Palavra",
    timestamps: false,
  }
);

//parte de linguas

module.exports = Palavra;
