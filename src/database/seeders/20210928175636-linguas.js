"use strict";
/* istanbul ignore file */

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "Lingua",
      [
        {
          nome: "Arauá",
          id_conteudo: 15,
          id_tronco: 1,
        },
        {
          nome: "Culina",
          id_conteudo: 16,
          id_tronco: 1,
        },
        {
          nome: "Deni",
          id_conteudo: 17,
          id_tronco: 1,
        },
        {
          nome: "Banauá",
          id_conteudo: 18,
          id_tronco: 1,
        },
        {
          nome: "Jamamadi",
          id_conteudo: 19,
          id_tronco: 1,
        },
        {
          nome: "Jaráuara",
          id_conteudo: 20,
          id_tronco: 1,
        },
        {
          nome: "Bahwana",
          id_conteudo: 21,
          id_tronco: 2,
        },
        {
          nome: "Baníua (de Guiana)",
          id_conteudo: 22,
          id_tronco: 2,
        },
        {
          nome: "Baré",
          id_conteudo: 23,
          id_tronco: 2,
        },
        {
          nome: "Caixana",
          id_conteudo: 24,
          id_tronco: 2,
        },
        {
          nome: "Curripaco",
          id_conteudo: 25,
          id_tronco: 2,
        },
        {
          nome: "Iabaana",
          id_conteudo: 26,
          id_tronco: 2,
        },
        {
          nome: "Jumana",
          id_conteudo: 27,
          id_tronco: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Lingua", null, {});
  },
};
