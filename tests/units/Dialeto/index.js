const modelDialeto = require("../../../src/models/Dialeto");

describe("\n## TESTES DIALETO\n", () => {
  describe("Criação de Dialeto", () => {
    it("Criando Dialeto com o metodo create() - 1", async () => {
      const dialeto = await modelDialeto.create({
        id_etnia: 2,
        id_lingua: 3,
      });
      expect(dialeto).toMatchObject({
        id_conteudo: 12,
        id_etnia: 2,
        id_lingua: 3,
      });
    });
  });
  describe("Consulta de Dialeto", () => {
    it("Consultando Dialeto com o metodo searchAll()", async () => {
      const dialeto = await modelDialeto.searchAll({
        id_etnia: 2,
        id_lingua: 3,
      });
      expect(dialeto).toMatchObject([
        {
          etnia: { id_etnia: 2, nome: "Aikewara" },
          lingua: { id_lingua: 3, nome: "tupi-guarani1" },
        },
      ]);
    });
    it("Consultando Dialeto com o metodo searchAllEthnicity()", async () => {
      const dialeto = await modelDialeto.searchAllEthnicity(3);
      console.log(dialeto)
      expect(dialeto).toMatchObject([{
        etnia: {
          id_etnia: 2,
          nome: "Aikewara",
        },
        id_conteudo: 12,
        id_etnia: 2,
        id_lingua: 3,
      }]);
    });
  });
});
