const databaseConfig = require("../../config/database");
const Conteudo = require("../Conteudo/Conteudo");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Etnia = sequelize.define(
  "Etnia",
  {
    id_etnia: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_conteudo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Etnia",
    timestamps: false,
  }
);

Etnia.hasOne(Conteudo, {
  foreignKey: "id_conteudo",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_conteudo",
});

module.exports = Etnia;
