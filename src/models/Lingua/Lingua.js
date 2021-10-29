const databaseConfig = require("../../config/database");
const Conteudo = require("../Conteudo/Conteudo");
const Tronco = require("../Tronco/Tronco");

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
    id_tronco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Tronco",
        key: "id_tronco",
      },
      onUpdate: "SET NULL",
      onDelete: "SET NULL",
    },
    id_conteudo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Conteudo",
        key: "id_conteudo",
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    glottocode: {
      type: DataTypes.STRING,
      allowNull: true,
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
Lingua.hasOne(Tronco, {
  foreignKey: "id_tronco",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  sourceKey: "id_tronco",
  as: "tronco",
});
Tronco.hasMany(Lingua, {
  foreignKey: "id_tronco",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  sourceKey: "id_tronco",
  as: "linguas",
});
module.exports = Lingua;
