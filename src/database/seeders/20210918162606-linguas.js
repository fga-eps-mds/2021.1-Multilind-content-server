"use strict";
/* istanbul ignore file */

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "Lingua",
      [
        {
          nome: "Awetí",
          id_conteudo: 1,
        },
        {
          nome: "Munduruku",
          id_conteudo: 2,
        },
        {
          nome: "Guarani Mbyá",
          id_conteudo: 3,
        },
        {
          nome: "Tapirapé",
          id_conteudo: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Lingua", null, {});
  },
};
