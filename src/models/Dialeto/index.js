const DialetoModel = require("./Dialeto");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return DialetoModel.findAll({
    raw: true,
  });
};
exports.create = async (dialeto) => {
  const conteudoCreated = await Conteudo.create();
  dialeto.id_conteudo = conteudoCreated.id_conteudo;
  return DialetoModel.create(dialeto);
};
exports.searchAll = async (id_etnia) => {
  return DialetoModel.findAll({where: {id_etnia: id_etnia}});
};
