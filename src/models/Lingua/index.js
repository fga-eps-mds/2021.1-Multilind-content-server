const LinguaModel = require("./Lingua");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return LinguaModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome) => {
  return LinguaModel.findOne({
    where: {
      nome: nome,
    },
  });
};
exports.create = async (lingua) => {
  const conteudoCreated = await Conteudo.create();
  lingua.id_conteudo = conteudoCreated.id_conteudo;
  return LinguaModel.create(lingua);
};
exports.searchById = async (id) => {
  return LinguaModel.findByPk(id);
};
exports.searchAll = async () => {
  return LinguaModel.findAll();
};
exports.delete = async (id) => {
  return LinguaModel.destroy({
    where: {
      id_lingua: id,
    },
  });
};
exports.editById = async (body, id) => {
  return LinguaModel.update(body, { where: { id_lingua: id } });
};
