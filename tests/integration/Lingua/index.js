const supertest = require("supertest");
import app from '../../../src/app'

describe("Testes Lingua", () => {
  describe("Testes de criação de Lingua", () => {
    it("Lingua - 200 - Criado com sucesso", async () => {
      const data = { nome: "tupi" };
      const result = await supertest(app).post("/lingua").send(data);
      expect(result.status).toStrictEqual(200);
    });

    it("Lingua - 400 - Nome Existente", async () => {
      const data = { nome: "tupi" };
      const result = await supertest(app).post("/lingua").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome já existente - Lingua - tupi",
      });
    });

    it("Lingua - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).post("/lingua").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Credenciais inválido - Lingua - ",
      });
    });
  });

  describe("Testes de listagem Lingua", () => {
    it("Lingua - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/lingua/1");

      expect(result.status).toStrictEqual(200);

    });
    it("Lingua - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/lingua");

      expect(result.status).toStrictEqual(200);
    });

    it("Lingua - 404 - tentando listar id inexistente", async () => {
      const result = await supertest(app).get("/lingua/10");

      expect(result.status).toStrictEqual(404);
      expect(result.body).toMatchObject({
        error: "Lingua não encontrada - Lingua - ID 10",
      });
    });
  });

  describe("Testes de atualização de Lingua", () => {
    it("Lingua - 200 - Atualizando com sucesso - Por ID", async () => {
      const data = {
        nome: "guarani",
      };
      supertest(app)
        .put("/lingua/1")
        .send(data)
        .then(async (result) => {
          expect(result.status).toStrictEqual(200);
        })
        .catch((err) => {
          throw err;
        });
    });

    it("Lingua - 400 - Nome Existente", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).put("/lingua/2").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome já existente - Lingua - tupi-guarani",
      });
    });

    it("Lingua - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).put("/lingua/1").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome e Glottocode inválidos - Lingua",
      });
    });
  });

  describe("Testes de deleção de Lingua", () => {
    it("Lingua - 200 - Deletando com sucesso - Por ID", async () => {
      const result = await supertest(app).delete("/lingua/1");
      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        Result: "Lingua deletada com sucesso",
      });
    });
  });
});
