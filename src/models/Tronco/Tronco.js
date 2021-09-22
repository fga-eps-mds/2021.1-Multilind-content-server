const databaseConfig = require("../../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Conteudo = require("../Conteudo/Conteudo");

const Tronco = sequelize.define(
  "Tronco",
  {
    id_tronco: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_conteudo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Conteudo",
        key: "id_conteudo",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Tronco",
    timestamps: false,
  }
);

Tronco.hasOne(Conteudo, {
  foreignKey: "id_conteudo",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_conteudo",
});

module.exports = Tronco;
