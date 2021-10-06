const databaseConfig = require("../../config/database");
import Conteudo from "../Conteudo/Conteudo";
import Etnia from "../Etnia/Etnia";
import Lingua from "../Lingua/Lingua";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Dialeto = sequelize.define(
    "Dialeto",
    {
        id_etnia: {
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

Dialeto.hasOne(Etnia, {
    foreignKey: "id_etnia",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    sourceKey: "id_etnia",
});

Dialeto.hasOne(Lingua, {
    foreignKey: "id_lingua",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    sourceKey: "id_lingua",
});

module.exports = Dialeto;
