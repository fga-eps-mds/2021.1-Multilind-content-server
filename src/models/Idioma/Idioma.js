const databaseConfig = require("../../config/database");
import Conteudo from "../Conteudo/Conteudo";
import Localidade from "../Localidade/Localidade";
import Lingua from "../Lingua/Lingua";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Idioma = sequelize.define(
  "Idioma",
  {
    id_localidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Localidade",
        key: "id_localidade",
      },
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
        model: "Conteduo",
        key: "id_conteudo",
      },
    },
  },
  {
    tableName: "Idioma",
    timestamps: false,
  }
);

Idioma.hasOne(Conteudo, {
  foreignKey: "id_conteudo",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  sourceKey: "id_conteudo",
});
Lingua.belongsToMany(Localidade, {
  foreignKey: "id_lingua",
  through: "Idioma",
  otherKey: "id_localidade",
});
Localidade.belongsToMany(Lingua, {
  foreignKey: "id_localidade",
  through: "Idioma",
  otherKey: "id_lingua",
});
Idioma.belongsTo(Localidade, {
  as: "localidade",
  foreignKey: "id_localidade",
});
Idioma.belongsTo(Lingua, {
  as: "lingua",
  foreignKey: "id_lingua",
});
module.exports = Idioma;
