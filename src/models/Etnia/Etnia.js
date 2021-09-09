import databaseConfig from "../../config/database";
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(databaseConfig);

const Etnia = sequelize.define('Etnia', {
  id_etnia: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Etnia',
  timestamps: false
});

module.exports = Etnia;