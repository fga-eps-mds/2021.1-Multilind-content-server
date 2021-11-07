const modelTronco = require("../../../src/models/Tronco");
const modelLingua = require("../../../src/models/Lingua");
const modelConteudo = require("../../../src/models/Conteudo");

describe("\n## TESTES TRONCO\n", () => {
  const troncoName = "Macro-Jê123";
  const linguaNome = ["tupi-guarani", "tupi-guarani2"];

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
    it("Atualizando tronco, com o metodo editById({}, 1)", async () => {
      const result = await modelTronco.editById({ nome: "Macro-Jê12" }, 1);
      expect(result).toEqual([1]);
    });
    it("Atualizando tronco, com o metodo editById({}, 2)", async () => {
      const result = await modelTronco.editById({ nome: troncoName }, 2);
      expect(result).toEqual([1]);
    });
  });
  describe("Listando após a Atualização de Tronco", () => {
    it("listando tronco, com o metodo searchById(1)", async () => {
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toMatchObject({
        id_tronco: 1,
        nome: "Macro-Jê12",
        id_conteudo: 8,
        linguas: [],
      });
    });
    it("Listando tronco, com o metodo searchById(2)", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        nome: troncoName,
        id_conteudo: 9,
        linguas: [],
      });
    });
    it("Listando tronco, com o metodo searchByName('Macro-Jê123')", async () => {
      const tronco = await modelTronco.searchByName("Macro-Jê123");
      expect(tronco).toMatchObject({
        id_tronco: 2,
        nome: troncoName,
        id_conteudo: 9,
      });
    });
  });
  describe("Deleção de Tronco", () => {
    it("Deletando Tronco, com o metodo delete(8) através do conteudo", async () => {
      const result = await modelConteudo.delete(8);
      expect(result).toEqual(1);
    });
  });
  describe("Relacionamento Lingua e Tronco", () => {
    it("Criando lingua com um tronco - 1", async () => {
      const linguas = await modelLingua.create({
        nome: linguaNome[0],
        id_tronco: 2,
      });
      expect(linguas).toMatchObject({
        id_conteudo: 10,
        id_tronco: 2,
        id_lingua: 4,
        nome: linguaNome[0],
      });
    });
    it("Listando tronco com relacionamento searchById(2) - 1", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        id_conteudo: 9,
        nome: troncoName,
        linguas: [
          {
            id_lingua: 4,
            id_conteudo: 10,
            nome: linguaNome[0],
          },
        ],
      });
    });
    it("Criando lingua com um tronco - 2", async () => {
      const linguas = await modelLingua.create({
        nome: linguaNome[1],
        id_tronco: 2,
      });
      expect(linguas).toMatchObject({
        id_conteudo: 11,
        id_tronco: 2,
        id_lingua: 5,
        nome: linguaNome[1],
      });
    });
    it("Listando tronco com relacionamento searchById(2) - 2", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        id_conteudo: 9,
        nome: troncoName,
        linguas: [
          {
            id_lingua: 4,
            id_conteudo: 10,
            nome: linguaNome[0],
          },
          {
            id_lingua: 5,
            id_conteudo: 11,
            nome: linguaNome[1],
          },
        ],
      });
    });
    it("Resgatando tronco com id da lingua", async () => {
      const tronco = await modelTronco.getTrunkByLanguage(4);
      expect(tronco).toMatchObject({
        id_lingua: 4,
        nome: linguaNome[0],
        tronco: {
          id_tronco: 2,
          nome: troncoName,
        },
      });
    });
  });
});
