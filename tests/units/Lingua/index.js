const modelLingua = require("../../../src/models/Lingua");

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
      expect(linguas).toMatchObject({
        id_conteudo: 3,
        id_lingua: 1,
        nome: "tupi-guarani",
      });
    });
    it("Criando lingua com o metodo create() - 2", async () => {
      const linguas = await modelLingua.create({ nome: "tupi" });
      expect(linguas).toMatchObject({
        id_conteudo: 4,
        id_lingua: 2,
        nome: "tupi",
      });
    });
  });
  describe("Atualização de Lingua", () => {
    it("Atualizando lingua, com o metodo editById(1) na tupla de ID = 1", async () => {
      const result = await modelLingua.editById({ nome: "Aikanã" }, 1);
      expect(result).toEqual([1]);
    });
    it("Atualizando lingua, com o metodo editById(2) na tupla de ID = 2", async () => {
      const result = await modelLingua.editById({ nome: "Aikewara" }, 2);
      expect(result).toEqual([1]);
    });
  });
  describe("Listando Linguas após atualização", () => {
    it("Listando com metodo searchByName('Aikanã')", async () => {
      const lingua = await modelLingua.searchByName("Aikanã");
      expect(lingua).toMatchObject({
        id_lingua: 1,
        id_conteudo: 3,
        nome: "Aikanã",
      });
    });
    it("Listando com metodo searchByID(1)", async () => {
      const lingua = await modelLingua.searchById(1);
      expect(lingua).toMatchObject({
        id_lingua: 1,
        id_conteudo: 3,
        nome: "Aikanã",
        tronco: null,
      });
    });
    it("Listando com metodo searchByID(2)", async () => {
      const lingua = await modelLingua.searchById(2);
      expect(lingua).toMatchObject({
        id_lingua: 2,
        id_conteudo: 4,
        nome: "Aikewara",
        tronco: null,
      });
    });
  });
  // describe("Deleção de Lingua", () => {
  //   it("Deletando Lingua, com o metodo delete(1) na tupla de ID - 1", async () => {
  //     await modelLingua.delete(1);
  //     const lingua = await modelLingua.searchById(1);
  //     expect(lingua).toEqual(null);
  //   });
  //   it("Deletando Lingua, com o metodo delete(2) na tupla de ID - 2", async () => {
  //     await modelLingua.delete(2);
  //     const lingua = await modelLingua.searchById(2);
  //     expect(lingua).toEqual(null);
  //   });
  // });
});
