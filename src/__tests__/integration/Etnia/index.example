const supertest = require("supertest");
const app = "localhost:8000";

describe("Testes Etnia", () => {
  describe("Testes de criação de Etnia", () => {
    it("Etnia - 200 - Criado com sucesso", async () => {
      const data = { nome: "tupi" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(200);
      const dataResult = { id_conteudo: 1, nome: "tupi" };
      expect(result.body).toStrictEqual(dataResult);
    });

    it("Etnia - 200 - Criado com sucesso - 2", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(200);
      const dataResult = { id_conteudo: 2, nome: "tupi-guarani" };
      expect(result.body).toStrictEqual(dataResult);
    });

    it("Etnia - 400 - Nome Existente", async () => {
      const data = { nome: "tupi" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toStrictEqual({ error: "Nome já existente - Etnia" });
    });

    it("Etnia - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toStrictEqual({
        error: "Nome inválido - Etnia",
      });
    });
  });

  describe("Testes de listagem Etnia", () => {
    it("Etnia - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/etnia/1");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toStrictEqual({
        id_conteudo: 1,
        id_etnia: 1,
        nome: "tupi",
      });
    });

    it("Etnia - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/etnia");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toStrictEqual([
        { id_conteudo: 1, id_etnia: 1, nome: "tupi" },
        { id_conteudo: 2, id_etnia: 2, nome: "tupi-guarani" },
      ]);
    });

    it("Etnia - 404 - tentando listar id inexistente", async () => {
      const result = await supertest(app).get("/etnia/10");

      expect(result.status).toStrictEqual(404);
      expect(result.body).toStrictEqual({
        error: "Etnia não encontrada - Etnia",
      });
    });
  });

  describe("Testes de atualização de Etnia", () => {
    it("Etnia - 200 - Atualizando com sucesso - Por ID", async () => {
      const data = { nome: "guarani" };
      supertest(app)
        .put("/etnia/1")
        .send(data)
        .then(async (result) => {
          expect(result.status).toStrictEqual(200);
          expect(result.body).toStrictEqual(data);

          supertest(app)
            .get("/etnia/1")
            .then((resultDB) => {
              expect(result.body).toStrictEqual({ nome: resultDB.body.nome });
            });
        })
        .catch((err) => {
          throw err;
        });
    });

    it("Etnia - 400 - Nome Existente", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).put("/etnia/2").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toStrictEqual({ error: "Nome já existente - Etnia" });
    });

    it("Etnia - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).put("/etnia/1").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toStrictEqual({
        error: "Nome inválido - Etnia",
      });
    });
  });

  describe("Testes de deleção de Etnia", () => {
    it("Etnia - 200 - Deletando com sucesso - Por ID", async () => {
      supertest(app)
        .delete("/etnia/1")
        .then(async (result) => {
          expect(result.status).toStrictEqual(200);

          supertest(app)
            .get("/etnia/1")
            .then((resultDB) => {
              expect(resultDB.body).toStrictEqual({
                error: "Etnia não encontrada - Etnia",
              });
            });
        })
        .catch((err) => {
          throw err;
        });
    });

    it("Etnia - 404 - ID Existente", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).delete("/etnia/15");

      expect(result.status).toStrictEqual(404);
      expect(result.body).toStrictEqual({
        error: "Etnia não encontrada - Etnia",
      });
    });
  });
});
