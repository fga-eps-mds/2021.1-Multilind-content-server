const modelLocalidade = require("../../../models/Localidade");
require("../../../database");

describe("\n## TESTES LOCALIDADE\n", () => {
  describe("Criação de Localidade", () => {
    it("Criando localidade com o metodo create() - 1", async () => {
      const localidade = await modelLocalidade.create({ latitude: 123.5, longitude: 456.9 });
      expect(localidade.dataValues).toEqual({
        id_localidade: 1,
        latitude: 123.5,
        longitude: 456.9
      });
    });
  });
  describe("Consulta de localidade", () => {
    it("Consultando com metodo searchByID(1)", async () => {
      const localidade = await modelLocalidade.searchById(1);
      console.log(localidade.dataValues);
      expect(localidade.dataValues).toEqual({
        id_localidade: 1,
        latitude: 123.5,
        longitude: 456.9
      });
    });
  });
});
