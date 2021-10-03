"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "Tronco",
      [
        {
          nome: "línguas arauanas",
          id_conteudo: 13,
        },
        {
          nome: "línguas aruaques",
          id_conteudo: 14,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Tronco", null, {});
  },
};
