const databaseConfig = require("../../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Conteudo = require("../Conteudo/Conteudo");
const Lingua = require("../Lingua/Lingua");

const Palavra = sequelize.define(
  "Palavra",
  {
    id_palavra: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_lingua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Lingua",
        key: "id_lingua",
      },
      unUpdate: "CASCADE",
      onDelete: "CASCADE",
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
    significado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Palavra",
    timestamps: false,
  }
);

Palavra.hasOne(Conteudo, {
  foreignKey: "id_conteudo",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_conteudo",
});

Palavra.hasOne(Lingua, {
  foreignKey: "id_lingua",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_lingua",
});

module.exports = Palavra;
