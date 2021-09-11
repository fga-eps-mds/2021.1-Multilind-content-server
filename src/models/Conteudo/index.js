const ConteudoModel = require("./Conteudo");

exports.getAll = async () => {
  return await ConteudoModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome) => {
  return await ConteudoModel.findOne({
    where: {
      nome: nome,
    },
  });
};
exports.create = async () => {
  return await ConteudoModel.create({});
};
exports.searchById = async (id) => {
  return await ConteudoModel.findByPk(id);
};
exports.searchAll = async () => {
  return await ConteudoModel.findAll();
};
exports.delete = async (id) => {
  return await ConteudoModel.destroy({
    where: {
      id_conteudo: id,
    },
  });
};
exports.editById = async ({ status }, id) => {
  return await ConteudoModel.update({ status }, { where: { id_conteudo: id } });
};
