const databaseConfig = require("../../config/database");
const Conteudo = require("../Conteudo/Conteudo");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Localidade = sequelize.define(
  "Localidade",
  {
    id_localidade: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "Localidade",
    timestamps: false,
  }
);

module.exports = Localidade;
