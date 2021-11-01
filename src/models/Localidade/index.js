const LocalidadeModel = require("./Localidade");

exports.create = async (localidade) => {
  return LocalidadeModel.create(localidade);
};
exports.createBulkInsert = async (localidades) => {
  return LocalidadeModel.bulkCreate(localidades);
};
exports.searchById = async (id) => {
  return LocalidadeModel.findByPk(id);
};
exports.getAll = async () => {
  return LocalidadeModel.findAll({
    raw: true,
  });
};
