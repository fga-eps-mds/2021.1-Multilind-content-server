import databaseConfig from "../../config/database";

import { Sequelize, DataTypes } from "sequelize";
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

export default Etnia;
