const modelIdioma = require("../../../src/models/Idioma");

describe("\n## TESTES IDIOMA\n", () => {
  describe("Criação de Idioma", () => {
    it("Criando idioma com o metodo create() - 1", async () => {
      const idioma = await modelIdioma.create({
        id_localidade: 1,
        id_lingua: 3,
      });
      expect(idioma).toMatchObject({
        id_conteudo: 13,
        id_localidade: 1,
        id_lingua: 3,
      });
    });
  });
  describe("Consulta de Idioma", () => {
    it("Consultando com metodo searchAll()", async () => {
      const idioma = await modelIdioma.searchAll({
        id_localidade: 1,
        id_lingua: 3,
      });

      expect(idioma.length).toBeTruthy()
    });
  });
});
