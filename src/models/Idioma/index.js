const IdiomaModel = require("./Idioma");
const Conteudo = require("../Conteudo");
const LocalidadeModel = require("../Localidade/Localidade");
const LinguaModel = require("../Lingua/Lingua");
const TroncoModel = require("../Tronco/Tronco");

exports.getAll = async () => {
  return IdiomaModel.findAll({
    raw: true,
  });
};
exports.create = async (idioma) => {
  const conteudoCreated = await Conteudo.create();
  idioma.id_conteudo = conteudoCreated.id_conteudo;
  return IdiomaModel.create(idioma);
};
exports.searchAll = async (query) => {
  return IdiomaModel.findAll({
    where: query,
    attributes: ["id_conteudo"],
    include: [
      { model: LocalidadeModel, as: "localidade" },
      {
        model: LinguaModel,
        as: "lingua",
        include: [
          {
            model: TroncoModel,
            as: "tronco",
            attributes: ["id_tronco", "nome"],
          },
        ],
      },
    ],
  });
};
