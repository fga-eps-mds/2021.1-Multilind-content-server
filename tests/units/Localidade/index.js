const modelLocalidade = require("../../../src/models/Localidade");

describe("\n## TESTES LOCALIDADE\n", () => {
  describe("Criação de Localidade", () => {
    it("Criando localidade com o metodo create() - 1", async () => {
      const localidade = await modelLocalidade.create({
        latitude: 123.5,
        longitude: 456.9,
      });
      expect(localidade).toMatchObject({
        id_localidade: 1,
        latitude: 123.5,
        longitude: 456.9,
      });
    });
    it("Criando localidade com o metodo createBulkInsert()", async () => {
      const localidade = await modelLocalidade.createBulkInsert([
        {
          latitude: 123.53,
          longitude: 456.934,
        },
        {
          latitude: 123.534,
          longitude: 456.9344,
        },
        {
          latitude: 123.531,
          longitude: 456.9345,
        }
      ]);
      expect(localidade).toMatchObject([
        {
          id_localidade: 2,
          latitude: 123.53,
          longitude: 456.934,
        },
        {
          id_localidade: 3,
          latitude: 123.534,
          longitude: 456.9344,
        },
        {
          id_localidade: 4,
          latitude: 123.531,
          longitude: 456.9345,
        }
      ]);
    });
  });
  describe("Consulta de localidade", () => {
    it("Consultando com metodo searchByID(1)", async () => {
      const localidade = await modelLocalidade.searchById(1);
  
      expect(localidade).toMatchObject({
        id_localidade: 1,
        latitude: 123.5,
        longitude: 456.9,
      });
    });
    it("Consultando com metodo getAll()", async () => {
      const localidade = await modelLocalidade.getAll();
  
      expect(localidade).toMatchObject([
        {
          id_localidade: 1,
          latitude: 123.5,
          longitude: 456.9,
        },
        {
          id_localidade: 2,
          latitude: 123.53,
          longitude: 456.934,
        },
        {
          id_localidade: 3,
          latitude: 123.534,
          longitude: 456.9344,
        },
        {
          id_localidade: 4,
          latitude: 123.531,
          longitude: 456.9345,
        }
      ]);
    });
  });
});
