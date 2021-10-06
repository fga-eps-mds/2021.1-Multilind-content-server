const LocalidadeModel = require("./Localidade");

exports.create = async (localidade) => {
  return LocalidadeModel.create(localidade);
};
exports.searchById = async (id) => {
  return LocalidadeModel.findByPk(id);
};
