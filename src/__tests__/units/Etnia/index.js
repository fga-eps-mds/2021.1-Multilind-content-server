const modelEtnia = require("../../../models/Etnia");
require("../../../database");

describe("Testes Etnia", () => {
  describe("Listagem de Etnia", () => {
    it("Listando com metodo searchAll() com banco vazio", async () => {
      const etnias = await modelEtnia.searchAll();
      expect(etnias.length).toEqual(0);
    });
    it("Listando com metodo searchByID(1) com banco vazio", async () => {
      const etnia = await modelEtnia.searchById(1);
      expect(etnia).toEqual(null);
    });
  });
  describe("Criação de Etnia", () => {
    it("Criando etnia com o metodo create() - 1", async () => {
      const etnias = await modelEtnia.create({ nome: "tupi-guarani" });
      expect(etnias.dataValues).toEqual({
        id_conteudo: 1,
        id_etnia: 1,
        nome: "tupi-guarani",
      });
    });
    it("Criando etnia com o metodo create() - 2", async () => {
      const etnias = await modelEtnia.create({ nome: "tupi" });
      expect(etnias.dataValues).toEqual({
        id_conteudo: 2,
        id_etnia: 2,
        nome: "tupi",
      });
    });
  });
  describe("Atualização de Etnia", () => {
    it("Atualizando etnia, com o metodo editById(1) na tupla de ID = 1", async () => {
      await modelEtnia.editById({ nome: "Aikanã" }, 1);
      const etnia = await modelEtnia.searchById(1);
      expect(etnia.dataValues).toEqual({
        id_conteudo: 1,
        id_etnia: 1,
        nome: "Aikanã",
      });
    });
    it("Atualizando etnia, com o metodo editById(2) na tupla de ID = 2", async () => {
      await modelEtnia.editById({ nome: "Aikewara" }, 2);
      const etnia = await modelEtnia.searchById(2);
      expect(etnia.dataValues).toEqual({
        id_conteudo: 2,
        id_etnia: 2,
        nome: "Aikewara",
      });
    });
  });
  describe("Deleção de Etnia", () => {
    it("Deletando Etnia, com o metodo delete(1) na tupla de ID - 1", async () => {
      await modelEtnia.delete(1);
      const etnia = await modelEtnia.searchById(1);
      expect(etnia).toEqual(null);
    });
    it("Deletando Etnia, com o metodo delete(2) na tupla de ID - 2", async () => {
      await modelEtnia.delete(2);
      const etnia = await modelEtnia.searchById(2);
      expect(etnia).toEqual(null);
    });
  });
});
