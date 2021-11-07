"use strict";
/* istanbul ignore file */

const statusArray = [];
const qtd = 27;
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
