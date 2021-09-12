const EtniaModel = require("./Etnia");
const Conteudo = require("../Conteudo");

exports.getAll = async () => {
  return EtniaModel.findAll({
    raw: true,
  });
};
exports.searchByName = async (nome) => {
  return EtniaModel.findOne({
    where: {
      nome: nome,
    },
  });
};
exports.create = async (etnia) => {
  const conteudoCreated = await Conteudo.create();
  etnia.id_conteudo = conteudoCreated.id_conteudo;
  return EtniaModel.create(etnia);
};
exports.searchById = async (id) => {
  return EtniaModel.findByPk(id);
};
exports.searchAll = async () => {
  return EtniaModel.findAll();
};
exports.delete = async (id) => {
  return EtniaModel.destroy({
    where: {
      id_etnia: id,
    },
  });
};
exports.editById = async (body, id) => {
  return EtniaModel.update(body, { where: { id_etnia: id } });
};
