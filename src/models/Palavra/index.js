const PalavraModel = require("./Palavra");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return PalavraModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome, idLingua) => {
  return PalavraModel.findOne({
    where: {
      nome,
      id_lingua: idLingua,
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
    where: {
      id_palavra: idPalavra,
      id_lingua: idLingua,
    },
  });
};
exports.searchAll = async (idLingua) => {
  return PalavraModel.findAll({
    where: {
      id_lingua: idLingua,
    },
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
