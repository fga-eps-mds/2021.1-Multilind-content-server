const modelTronco = require("../../../models/Tronco");
const modelLingua = require("../../../models/Lingua");
const modelConteudo = require("../../../models/Conteudo");
require("../../../database");

describe("\n## TESTES TRONCO\n", () => {
  describe("Listagem de Tronco", () => {
    it("Listando com metodo getAll() com banco vazio", async () => {
      const tronco = await modelTronco.getAll();
      expect(tronco.length).toEqual(0);
    });
    it("Listando com metodo searchByID(1) com banco vazio", async () => {
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toEqual(null);
    });
  });
  describe("Criação de Tronco", () => {
    it("Criando tronco com o metodo create() - 1", async () => {
      const tronco = await modelTronco.create({ nome: "Macro-Jê" });
      expect(tronco).toMatchObject({
        id_tronco: 1,
        nome: "Macro-Jê",
        id_conteudo: 8,
      });
    });
    it("Criando tronco com o metodo create() - 2", async () => {
      const tronco = await modelTronco.create({ nome: "Macro-Jê1" });
      expect(tronco).toMatchObject({
        id_tronco: 2,
        nome: "Macro-Jê1",
        id_conteudo: 9,
      });
    });
  });
  describe("Atualização de Tronco", () => {
    it("Atualizando tronco, com o metodo searchById(1)", async () => {
      await modelTronco.editById({ nome: "Macro-Jê12" }, 1);
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toMatchObject({
        id_tronco: 1,
        nome: "Macro-Jê12",
        id_conteudo: 8,
        linguas: [],
      });
    });
    it("Atualizando tronco, com o metodo searchById(2)", async () => {
      await modelTronco.editById({ nome: "Macro-Jê123" }, 2);
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        nome: "Macro-Jê123",
        id_conteudo: 9,
        linguas: [],
      });
    });
  });
  describe("Deleção de Tronco", () => {
    it("Deletando Tronco, com o metodo delete(8) através do conteudo", async () => {
      await modelConteudo.delete(8);
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toEqual(null);
    });
  });
  describe("Relacionamento Lingua e Tronco", () => {
    it("Criando lingua com um tronco - 1", async () => {
      const linguas = await modelLingua.create({
        nome: "tupi-guarani",
        id_tronco: 2,
      });
      expect(linguas).toMatchObject({
        id_conteudo: 10,
        id_tronco: 2,
        id_lingua: 4,
        nome: "tupi-guarani",
      });
    });
    it("Listando tronco com relacionamento searchById(2) - 1", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        id_conteudo: 9,
        nome: "Macro-Jê123",
        linguas: [
          {
            id_lingua: 4,
            id_conteudo: 10,
            nome: "tupi-guarani",
          },
        ],
      });
    });
    it("Criando lingua com um tronco - 2", async () => {
      const linguas = await modelLingua.create({
        nome: "tupi-guarani2",
        id_tronco: 2,
      });
      expect(linguas).toMatchObject({
        id_conteudo: 11,
        id_tronco: 2,
        id_lingua: 5,
        nome: "tupi-guarani2",
      });
    });
    it("Listando tronco com relacionamento searchById(2) - 2", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        id_conteudo: 9,
        nome: "Macro-Jê123",
        linguas: [
          {
            id_lingua: 4,
            id_conteudo: 10,
            nome: "tupi-guarani",
          },
          {
            id_lingua: 5,
            id_conteudo: 11,
            nome: "tupi-guarani2",
          },
        ],
      });
    });
    it("Resgatando tronco com id da lingua", async () => {
      const tronco = await modelTronco.getTrunkByLanguage(4);
      expect(tronco).toMatchObject({
        id_lingua: 4,
        nome: "tupi-guarani",
        tronco: {
          id_tronco: 2,
          nome: "Macro-Jê123",
        },
      });
    });
  });
});
