const Falada = require("./Falada");
const Localidade = require("../Localidade/Localidade");
const Lingua = require("../Lingua/Lingua");
const Tronco = require("../Tronco/Tronco");

exports.create = async (body) => {
  return Falada.create(body);
};

exports.delete = async (id) => {
  return Falada.destroy({
    where: {
      id_falada: id,
    },
  });
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
        include: [
          {
            model: Tronco,
            as: "tronco",
            attributes: ["id_tronco", "nome"],
          },
        ],
      },
    ],
  });
};
