const Localidade = require("./Localidade");

exports.create = async (body) => {
  return Localidade.create(body);
};

exports.searchById = async (id) => {
  return Localidade.findByPk(id);
};

exports.searchAll = async (params = {}) => {
  return Localidade.findAll(params);
};

exports.delete = async (id) => {
  return Localidade.destroy({
    where: {
      id_localidade: id,
    },
  });
};

exports.editById = async (body, id) => {
  return Localidade.update(body, { where: { id_localidade: id } });
};
