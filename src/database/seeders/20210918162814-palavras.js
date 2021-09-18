"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "Palavra",
      [
        {
          id_lingua: 1,
          id_conteudo: 5,
          nome: "'yp",
          significado: "Árvore",
        },
        {
          id_lingua: 1,
          id_conteudo: 6,
          nome: "ta'wat",
          significado: "Onça",
        },
        {
          id_lingua: 2,
          id_conteudo: 7,
          nome: "poxi",
          significado: "Pesado",
        },
        {
          id_lingua: 2,
          id_conteudo: 8,
          nome: "'at",
          significado: "Cair",
        },
        {
          id_lingua: 3,
          id_conteudo: 9,
          nome: "tatá",
          significado: "Fogo",
        },
        {
          id_lingua: 3,
          id_conteudo: 10,
          nome: "gwyrá",
          significado: "Pássaro",
        },
        {
          id_lingua: 4,
          id_conteudo: 11,
          nome: "itã",
          significado: "Pedra",
        },
        {
          id_lingua: 4,
          id_conteudo: 12,
          nome: "txãwãrã",
          significado: "Onça",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Palavra", null, {});
  },
};
