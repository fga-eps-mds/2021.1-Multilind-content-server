const databaseConfig = require("../../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Conteudo = sequelize.define(
  "Conteudo",
  {
    id_conteudo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(["aprovado", "reprovado", "pendente"]),
      defaultValue: "pendente",
      allowNull: false,
    },
    data_submissao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "Conteudo",
    timestamps: false,
  }
);

module.exports = Conteudo;
