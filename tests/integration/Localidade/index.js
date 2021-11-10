const supertest = require("supertest");
import app from '../../../src/app'

describe("Testes Localidade", () => {
  describe("Testes de criação de Localidade", () => {
    it("Localidade - 200 - Criado com sucesso", async () => {
      const data = {
        longitude: 456.9,
        latitude: 123.5,
      };
      const result = await supertest(app).post("/localidade").send(data);
      expect(result.status).toStrictEqual(200);
    });
  });

  describe("Testes de listagem Localidade", () => {
    it("Localidade - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/localidade/1");

      expect(result.status).toStrictEqual(200);
    });
    it("Localidade - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/localidade");

      expect(result.status).toStrictEqual(200);
    });
  });
});
