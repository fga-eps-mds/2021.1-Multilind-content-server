const Falada = require("./Falada");
const Localidade = require("../Localidade/Localidade");
const Lingua = require("../Lingua/Lingua");

exports.create = async (body) => {
  return Falada.create(body);
};

exports.searchAll = async () => {
  return Falada.findAll({
    attributes: ["id_falada"],

    include: [
      {
        model: Localidade,
        as: "localidade",
        attributes: ["id_localidade", "latitude", "longitude"],
      },
      {
        model: Lingua,
        as: "lingua",
        attributes: ["id_lingua", "nome"],
      },
    ],
  });
};
