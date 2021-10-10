const PalavraModel = require("./Palavra");
const LinguaModel = require("../Lingua/Lingua");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return PalavraModel.findAll({
    raw: true,
  });
};
exports.getOne = async (idPalavra) => {
  return PalavraModel.findOne({
    where: { id_palavra: idPalavra },
  });
};
exports.searchByName = async (nome, idLingua, significado) => {
  return PalavraModel.findOne({
    where: {
      nome,
      id_lingua: idLingua,
      significado,
    },
  });
};
exports.create = async (body) => {
  const conteudoCreated = await Conteudo.create();
  body.id_conteudo = conteudoCreated.id_conteudo;
  return PalavraModel.create(body);
};

exports.searchById = async (idPalavra, idLingua) => {
  return PalavraModel.findOne({
    raw: true,
    nest: true,
    where: {
      id_palavra: idPalavra,
      id_lingua: idLingua,
    },
    attributes: ["id_palavra", "id_conteudo", "nome", "significado"],
    include: [
      {
        model: LinguaModel,
        as: "lingua",
        attributes: ["id_lingua", "id_conteudo", "nome"],
      },
    ],
  });
};
exports.searchAll = async (idLingua) => {
  return LinguaModel.findAll({
    where: {
      id_lingua: idLingua,
    },
    attributes: ["id_lingua", "id_conteudo", "nome"],
    include: [
      {
        model: PalavraModel,
        as: "palavras",
        attributes: ["id_palavra", "id_conteudo", "nome", "significado"],
      },
    ],
  });
};
exports.editById = async (body, idPalavra, idLingua) => {
  return PalavraModel.update(body, {
    where: {
      id_palavra: idPalavra,
      id_lingua: idLingua,
    },
  });
};
