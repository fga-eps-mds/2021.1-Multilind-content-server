const ConteudoModel = require("./Conteudo");

exports.getAll = async () => {
  return ConteudoModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome) => {
  return ConteudoModel.findOne({
    where: {
      nome: nome,
    },
  });
};
exports.create = async () => {
  return ConteudoModel.create({});
};
exports.searchById = async (id) => {
  return ConteudoModel.findByPk(id);
};
exports.searchAll = async () => {
  return ConteudoModel.findAll();
};
exports.delete = async (id) => {
  return ConteudoModel.destroy({
    where: {
      id_conteudo: id,
    },
  });
};
exports.editById = async ({ status }, id) => {
  return ConteudoModel.update({ status }, { where: { id_conteudo: id } });
};
