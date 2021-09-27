"use strict";
const statusArray = [];
const qtd = 12;
for (var it = 0; it < qtd; ++it) {
  statusArray.push({
    status: "pendente",
    data_submissao: new Date(),
  });
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Conteudo", statusArray, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Conteudo", null, {});
  },
};
