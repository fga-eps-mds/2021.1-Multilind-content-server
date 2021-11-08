const supertest = require("supertest");
const app = require("../../../src/app");

describe("Testes Idioma", () => {
  describe("Testes de criação de Idioma", () => {
    it("Idioma - 200 - Criado com sucesso", async () => {
      const data = {
        id_localidade: 2,
        id_lingua: 2,
      };
      const result = await supertest(app).post("/idioma").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = {
        id_conteudo: 9,
        id_localidade: 2,
        id_lingua: 2,
      };
      expect(result.body).toMatchObject(dataResult);
    });
  });

  describe("Testes de listagem Idioma", () => {
    it("Idioma - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/idioma").send({
        id_localidade: 1,
        id_lingua: 2,
      });

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject([
        {
          id_conteudo: 9,
          lingua: {
            etnia: [],
            id_lingua: 2,
            tronco: null,
          },
          localidade: {
            id_localidade: 2,
            longitude: 456.934,
            latitude: 123.53,
          },
        },
      ]);
    });
  });
});
