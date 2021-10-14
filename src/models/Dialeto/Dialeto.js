const databaseConfig = require("../../config/database");
const Conteudo = require("../Conteudo/Conteudo");
const Etnia = require("../Etnia/Etnia");
const Lingua = require("../Lingua/Lingua");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Dialeto = sequelize.define(
  "Dialeto",
  {
    id_etnia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_lingua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Lingua",
        key: "id_lingua",
      },
    },
    id_conteudo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Conteudo",
        key: "id_conteudo",
      },
    },
  },
  {
    tableName: "Dialeto",
    timestamps: false,
  }
);

Dialeto.hasOne(Conteudo, {
  foreignKey: "id_conteudo",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_conteudo",
});

Lingua.belongsToMany(Etnia, {
  foreignKey: "id_lingua",
  through: "Dialeto",
  otherKey: "id_etnia",
  as: "etnia",
});

Etnia.belongsToMany(Lingua, {
  foreignKey: "id_etnia",
  through: "Dialeto",
  otherKey: "id_lingua",
  as: "lingua",
});

Dialeto.belongsTo(Lingua, {
  as: "lingua",
  foreignKey: "id_lingua",
});

Dialeto.belongsTo(Etnia, {
  as: "etnia",
  foreignKey: "id_etnia",
});

module.exports = Dialeto;
