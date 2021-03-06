const PalavraModel = require("./Palavra");
const LinguaModel = require("../Lingua/Lingua");
const Conteudo = require("../Conteudo");

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
    attributes: ["id_palavra", "id_conteudo", "nome", "significado"],
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

exports.searchAllperPage = async (params) => {
  const result = await LinguaModel.findAndCountAll({
    where: {
      id_lingua: params.id_lingua,
    },
    attributes: [
      "id_lingua",
      "id_conteudo",
      "nome",
      // [
      //   Sequelize.fn("COUNT", Sequelize.col("Palavra.id_palavra")),
      //   "PalavraCount",
      // ],
    ],
    include: [
      {
        required: true,
        limit: params.limit,
        offset: params.offset,
        model: PalavraModel,
        as: "palavras",
        attributes: ["id_palavra", "id_conteudo", "nome", "significado"],
      },
    ],
  });

  let finalResult = { rows: result.rows };
  finalResult.count = result.rows[0].palavras.length;
  finalResult.pages = Math.ceil(finalResult.count / params.limit);

  return finalResult;
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
