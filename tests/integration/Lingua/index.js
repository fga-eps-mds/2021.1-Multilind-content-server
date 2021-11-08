const supertest = require("supertest");
const app = require("../../../src/app");

describe("Testes Lingua", () => {
  describe("Testes de criação de Lingua", () => {
    it("Lingua - 200 - Criado com sucesso", async () => {
      const data = { nome: "tupi" };
      const result = await supertest(app).post("/lingua").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = { id_conteudo: 1, id_lingua: 1, nome: "tupi" };
      expect(result.body).toMatchObject(dataResult);
    });

    it("Lingua - 200 - Criado com sucesso - 2", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).post("/lingua").send(data);

      expect(result.status).toStrictEqual(200);
      const dataResult = { id_conteudo: 2, id_lingua: 2, nome: "tupi-guarani" };
      expect(result.body).toMatchObject(dataResult);
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
      expect(result.body).toMatchObject({
        id_conteudo: 1,
        id_lingua: 1,
        nome: "tupi",
        tronco: null,
      });
    });
    it("Lingua - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/lingua");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject([
        {
          glottocode: null,
          id_conteudo: 1,
          id_lingua: 1,
          id_tronco: null,
          nome: "tupi",
          nomes_alternativos: null,
          tronco: {
            id_tronco: null,
            nome: null,
          },
        },
        {
          glottocode: null,
          id_conteudo: 2,
          id_lingua: 2,
          id_tronco: null,
          nome: "tupi-guarani",
          nomes_alternativos: null,
          tronco: {
            id_tronco: null,
            nome: null,
          },
        },
      ]);
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
          expect(result.body).toStrictEqual({
            id_conteudo: 1,
            id_lingua: 1,
            nome: "guarani",
            tronco: null,
          });
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
