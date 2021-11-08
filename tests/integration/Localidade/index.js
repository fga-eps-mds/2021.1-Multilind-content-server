const supertest = require("supertest");
const app = require("../../../src/app");

describe("Testes Localidade", () => {
  describe("Testes de criação de Localidade", () => {
    it("Localidade - 200 - Criado com sucesso", async () => {
      const data = {
        longitude: 456.9,
        latitude: 123.5,
      };
      const result = await supertest(app).post("/localidade").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = {
        id_localidade: 1,
        longitude: 456.9,
        latitude: 123.5,
      };
      expect(result.body).toMatchObject(dataResult);
    });
    it("Localidade - 200 - Criado com sucesso - 2", async () => {
      const data = {
        locations: [
          {
            longitude: 456.934,
            latitude: 123.53,
          },
          {
            longitude: 456.9344,
            latitude: 123.534,
          },
          {
            longitude: 456.9345,
            latitude: 123.531,
          },
        ],
      };
      const result = await supertest(app).post("/localidade/many").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = [
        {
          id_localidade: 2,
          longitude: 456.934,
          latitude: 123.53,
        },
        {
          id_localidade: 3,
          longitude: 456.9344,
          latitude: 123.534,
        },
        {
          id_localidade: 4,
          longitude: 456.9345,
          latitude: 123.531,
        },
      ];
      expect(result.body).toMatchObject(dataResult);
    });
  });

  describe("Testes de listagem Localidade", () => {
    it("Localidade - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/localidade/1");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_localidade: 1,
        longitude: 456.9,
        latitude: 123.5,
      });
    });
    it("Localidade - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/localidade");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject([
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
        },
      ]);
    });
  });
});
