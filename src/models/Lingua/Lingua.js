const databaseConfig = require("../../config/database");
const Conteudo = require("../Conteudo/Conteudo");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);


const Lingua = sequelize.define(
  "Lingua",
  {
    id_lingua: {
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
    tableName: "Lingua",
    timestamps: false,
  }
);

Lingua.hasOne(Conteudo, {
  foreignKey: "id_conteudo",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_conteudo",
});

module.exports = Lingua;
