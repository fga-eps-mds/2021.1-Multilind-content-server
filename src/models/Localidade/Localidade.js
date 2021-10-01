const databaseConfig = require("../../config/database");
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
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "Localidade",
    timestamps: false,
  }
);

module.exports = Localidade;
