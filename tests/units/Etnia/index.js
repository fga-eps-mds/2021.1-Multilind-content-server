const modelEtnia = require("../../../src/models/Etnia");
require("../../../src/database");

describe("\n## TESTES ETNIA\n", () => {
  describe("Criação de Etnia", () => {
    it("Criando etnia com o metodo create() - 1", async () => {
      const etnias = await modelEtnia.create({ nome: "tupi-guarani" });
      expect(etnias).toHaveProperty('nome', "tupi-guarani");
    });
  });
  describe("Atualização de Etnia", () => {
    it("Atualizando etnia, com o metodo editById(1) na tupla de ID = 1", async () => {
      const result = await modelEtnia.editById({ nome: "Aikanã" }, 1);
      expect(result).toEqual([1]);
    });
  });
  describe("Listagem de etnia após a atualização", () => {
    it("Listando com metodo searchByID(1)", async () => {
      const etnia = await modelEtnia.searchById(1);
      expect(etnia).toBeTruthy();
    });
    it("Listando com metodo searchByName('Aikewara')", async () => {
      await modelEtnia.create({ nome: "test" });
      const etnia = await modelEtnia.searchByName("test");
      expect(etnia).toHaveProperty('nome', "test");
    });
  });
  // describe("Deleção de Etnia", () => {
  //   it("Deletando Etnia, com o metodo delete(1) na tupla de ID - 1", async () => {
  //     const result = await modelEtnia.delete(1);
  //     expect(result).toEqual(1);
  //   });
  // });
});
