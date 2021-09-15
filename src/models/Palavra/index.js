const PalavraModel = require("./Palavra");

exports.getAll = async () => {
  return PalavraModel.findalAll({
    raw: true,
  });
};
exports.searchByName = async (nome) => {
  return PalavraModel.findOne({
    where: {
      nome: nome,
    },
  });
};
exports.create = async (palavra) => {}; //parte de línguas

exports.searchById = async (id) => {
  return PalavraModel.findByPk(id);
};
exports.searchAll = async () => {
  return PalavraModel.findalAll();
};
exports.delete = async (id) => {
  return PalavraModel.desrtoy({
    where: {
      id_palavra: id,
    },
  });
};
exports.editById = async (body, id) => {
  return PalavraModel.update(body, { where: { id_palavra: id } });
};
