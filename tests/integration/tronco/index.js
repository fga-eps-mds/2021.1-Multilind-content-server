const supertest = require("supertest");
const app = require("../../../src/app");

describe("Testes Tronco", () => {
  describe("Testes de criação de Tronco", () => {
    it("Tronco - 200 - Criado com sucesso", async () => {
      const data = { nome: "Tronco-test" };
      const result = await supertest(app).post("/tronco").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = {
        id_tronco: 1,
        nome: "Tronco-test",
      };
      expect(result.body).toMatchObject(dataResult);
    });

    it("Tronco - 200 - Criado com sucesso - 2", async () => {
      const data = { nome: "Tronco-test1" };
      const result = await supertest(app).post("/tronco").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = {
        id_tronco: 2,
        nome: "Tronco-test1",
      };
      expect(result.body).toMatchObject(dataResult);
    });

    it("Tronco - 400 - Nome Existente", async () => {
      const data = { nome: "Tronco-test" };
      const result = await supertest(app).post("/tronco").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome já existente - Tronco - Tronco-test",
      });
    });

    it("Tronco - 400 - Nome Vazio", async () => {
      const data = { nome: "" };
      const result = await supertest(app).post("/tronco").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Nome inválido - Tronco - ",
      });
    });
  });

  describe("Testes de listagem Tronco", () => {
    it("Tronco - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/tronco/2");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_tronco: 2,
        nome: "Tronco-test1",
      });
    });
    it("Tronco - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/tronco");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject([
        { id_tronco: 1, id_conteudo: 7, nome: "Tronco-test", linguas: [] },
        { id_tronco: 2, id_conteudo: 8, nome: "Tronco-test1", linguas: [] },
      ]);
    });
    it("Tronco - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/tronco/lingua/2");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_lingua: 2,
        nome: "tupi-guarani",
        tronco: null,
      });
    });
  });

  describe("Testes de atualização de Tronco", () => {
    it("Tronco - 200 - Atualizando com sucesso - Por ID", async () => {
      const data = {
        nome: "Tronco-test2",
      };
      supertest(app)
        .put("/tronco/1")
        .send(data)
        .then(async (result) => {
          expect(result.status).toStrictEqual(200);
          expect(result.body).toMatchObject({
            id_tronco: 1,
            id_conteudo: 7,
            nome: "Tronco-test2",
            linguas: [],
          });
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  describe("Testes de deleção de Tronco", () => {
    it("Tronco - 200 - Deletando com sucesso - Por ID", async () => {
      const result = await supertest(app).delete("/tronco/2");
      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        Result: "Tronco deletado com sucesso",
      });
    });
  });
});
