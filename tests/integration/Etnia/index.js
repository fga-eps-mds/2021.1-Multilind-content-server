const supertest = require("supertest");
const app = require("../../../src/app");

describe("Testes Etnia", () => {
  describe("Testes de criação de Etnia", () => {
    it("Etnia - 200 - Criado com sucesso", async () => {
      const data = { nome: "tupi45" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_conteudo: 3,
        id_etnia: 1,
        nome: "tupi45",
      });
    });

    it("Etnia - 200 - Criado com sucesso - 2", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(200);
      const dataResult = { id_conteudo: 4, id_etnia: 2, nome: "tupi-guarani" };
      expect(result.body).toMatchObject(dataResult);
    });

    it("Etnia - 400 - Nome Existente", async () => {
      const data = { nome: "tupi45" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome já existente - Etnia - tupi45",
      });
    });

    it("Etnia - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).post("/etnia").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome inválido - Etnia - ",
      });
    });
  });

  describe("Testes de listagem Etnia", () => {
    it("Etnia - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/etnia/1");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_conteudo: 3,
        id_etnia: 1,
        nome: "tupi45",
      });
    });

    it("Etnia - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/etnia");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject([
        { id_conteudo: 3, id_etnia: 1, nome: "tupi45" },
        { id_conteudo: 4, id_etnia: 2, nome: "tupi-guarani" },
      ]);
    });

    it("Etnia - 404 - tentando listar id inexistente", async () => {
      const result = await supertest(app).get("/etnia/10");

      expect(result.status).toStrictEqual(404);
      expect(result.body).toMatchObject({
        error: "Etnia não encontrada - Etnia - ID 10",
      });
    });
  });

  describe("Testes de atualização de Etnia", () => {
    it("Etnia - 200 - Atualizando com sucesso - Por ID", async () => {
      const data = {
        id_conteudo: 3,
        id_etnia: 1,
        nome: "guarani",
      };
      supertest(app)
        .put("/etnia/1")
        .send(data)
        .then(async (result) => {
          expect(result.status).toStrictEqual(200);
          expect(result.body).toMatchObject(data);
        });
    });

    it("Etnia - 400 - Nome Existente", async () => {
      const data = { nome: "tupi-guarani" };
      const result = await supertest(app).put("/etnia/2").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome já existente - Etnia - tupi-guarani",
      });
    });

    it("Etnia - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).put("/etnia/1").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
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
              expect(resultDB.body).toMatchObject({
                error: "Etnia não encontrada - Etnia - ID 1",
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
      expect(result.body).toMatchObject({
        error: "Etnia não encontrada - Etnia - ID 15",
      });
    });
  });
});
