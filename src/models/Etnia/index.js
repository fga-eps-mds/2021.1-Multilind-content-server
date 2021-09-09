import EtniaModel from "./Etnia";

exports.getAll = async () => {
  return await EtniaModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome) => {
  return await EtniaModel.findOne({
    where: {
      nome: nome,
    },
  });
};
exports.create = async (etnia) => {
  return await EtniaModel.create(etnia);
};
exports.searchById = async (id) => {
  return await EtniaModel.findByPk(id);
};
exports.searchAll = async () => {
  return await EtniaModel.findAll();
};
exports.delete = async (id) => {
  return await EtniaModel.destroy({
    where: {
      id_etnia: id,
    },
  });
};
exports.editById = async (body, id) => {
  return await EtniaModel.update(body, { where: { id_etnia: id } });
};
