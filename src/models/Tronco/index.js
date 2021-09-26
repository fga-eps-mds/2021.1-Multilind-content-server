const TroncoModel = require("./Tronco");
const LinguaModel = require("../Lingua/Lingua");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return TroncoModel.findAll({
    attributes: ["id_tronco", "id_conteudo", "nome"],
    include: [
      {
        model: LinguaModel,
        as: "linguas",
        attributes: ["id_lingua", "id_conteudo", "nome"],
      },
    ],
  });
};
exports.getTrunkByLanguage = async (id_lingua) => {
  return LinguaModel.findOne({
    where: { id_lingua: id_lingua },
    attributes: ["id_lingua", "nome"],
    include: [
      {
        model: TroncoModel,
        as: "tronco",
        attributes: ["id_tronco", "nome"],
      },
    ],
  });
};
exports.searchByName = async (nome) => {
  return TroncoModel.findOne({
    where: {
      nome,
    },
  });
};
exports.create = async (body) => {
  const conteudoCreated = await Conteudo.create();
  body.id_conteudo = conteudoCreated.id_conteudo;
  return TroncoModel.create(body);
};
exports.searchById = async (idTronco) => {
  return TroncoModel.findOne({
    where: {
      id_tronco: idTronco,
    },
    include: [
      {
        model: LinguaModel,
        as: "linguas",
        attributes: ["id_lingua", "id_conteudo", "nome"],
      },
    ],
  });
};
exports.searchAll = async () => {
  return TroncoModel.findAll();
};
exports.editById = async (body, idTronco) => {
  return TroncoModel.update(body, {
    where: {
      id_tronco: idTronco,
    },
  });
};
