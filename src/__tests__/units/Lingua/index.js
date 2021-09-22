const modelLingua = require("../../../models/Lingua");
require("../../../database");

describe("\n## TESTES LINGUA\n", () => {
  describe("Listagem de Lingua", () => {
    it("Listando com metodo searchAll() com banco vazio", async () => {
      const linguas = await modelLingua.searchAll();
      expect(linguas.length).toEqual(0);
    });
    it("Listando com metodo searchByID(1) com banco vazio", async () => {
      const lingua = await modelLingua.searchById(1);
      expect(lingua).toEqual(null);
    });
  });
  describe("Criação de Lingua", () => {
    it("Criando lingua com o metodo create() - 1", async () => {
      const linguas = await modelLingua.create({ nome: "tupi-guarani" });
      expect(linguas.dataValues).toEqual({
        id_conteudo: 3,
        id_lingua: 1,
        nome: "tupi-guarani",
      });
    });
    it("Criando lingua com o metodo create() - 2", async () => {
      const linguas = await modelLingua.create({ nome: "tupi" });
      expect(linguas.dataValues).toEqual({
        id_conteudo: 4,
        id_lingua: 2,
        nome: "tupi",
      });
    });
  });
  describe("Atualização de Lingua", () => {
    it("Atualizando lingua, com o metodo editById(1) na tupla de ID = 1", async () => {
      await modelLingua.editById({ nome: "Aikanã" }, 1);
      const lingua = await modelLingua.searchById(1);
      expect(lingua.dataValues).toEqual({
        id_conteudo: 3,
        id_lingua: 1,
        id_tronco: null,
        nome: "Aikanã",
      });
    });
    it("Atualizando lingua, com o metodo editById(2) na tupla de ID = 2", async () => {
      await modelLingua.editById({ nome: "Aikewara" }, 2);
      const lingua = await modelLingua.searchById(2);
      expect(lingua.dataValues).toEqual({
        id_conteudo: 4,
        id_lingua: 2,
        id_tronco: null,
        nome: "Aikewara",
      });
    });
  });
  describe("Deleção de Lingua", () => {
    it("Deletando Lingua, com o metodo delete(1) na tupla de ID - 1", async () => {
      await modelLingua.delete(1);
      const lingua = await modelLingua.searchById(1);
      expect(lingua).toEqual(null);
    });
    it("Deletando Lingua, com o metodo delete(2) na tupla de ID - 2", async () => {
      await modelLingua.delete(2);
      const lingua = await modelLingua.searchById(2);
      expect(lingua).toEqual(null);
    });
  });
});
