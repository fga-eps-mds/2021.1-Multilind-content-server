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
            primaryKey: true
        },
        id_lingua: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        id_conteudo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
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

Idioma.hasOne(Localidade, {
    foreignKey: "id_localidade",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    sourceKey: "id_localidade",
    as: "localidade"
});

Idioma.hasOne(Lingua, {
    foreignKey: "id_lingua",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    sourceKey: "id_lingua",
    as: "lingua"
});

module.exports = Idioma;
