const ConteudoModel = require("./Conteudo");

exports.create = async () => {
  return ConteudoModel.create({});
};
exports.delete = async (id) => {
  return ConteudoModel.destroy({
    where: {
      id_conteudo: id,
    },
  });
};
