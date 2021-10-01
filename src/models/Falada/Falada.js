const Localidade = require("../Localidade/Localidade");
const Lingua = require("../Lingua/Lingua");

const databaseConfig = require("../../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Falada = sequelize.define(
  "Falada",
  {
    id_falada: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_localidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Localidade",
        key: "id_localidade",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    id_lingua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Lingua",
        key: "id_lingua",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "Falada",
    timestamps: false,
  }
);

Falada.hasOne(Localidade, {
  foreignKey: "id_localidade",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_localidade",
  as: "localidade",
});

Falada.hasOne(Lingua, {
  foreignKey: "id_lingua",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_lingua",
  as: "lingua",
});

module.exports = Falada;
