const PalavraModel = require("./Palavra");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return PalavraModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome, id_lingua) => {
  return PalavraModel.findOne({
    where: {
      nome,
      id_lingua,
    },
  });
};
exports.create = async (nome, id_lingua, significado) => {
  const conteudoCreated = await Conteudo.create();

  return PalavraModel.create({
    nome,
    id_lingua,
    significado,
    id_conteudo: conteudoCreated.id_conteudo,
  });
};

exports.searchById = async (id_palavra, id_lingua) => {
  return PalavraModel.findOne({
    where: {
      id_palavra,
      id_lingua,
    },
  });
};
exports.searchAll = async (id_lingua) => {
  return PalavraModel.findAll({
    where: {
      id_lingua,
    },
  });
};
exports.editById = async (body, id_palavra, id_lingua) => {
  return PalavraModel.update(body, {
    where: {
      id_palavra,
      id_lingua,
    },
  });
};
