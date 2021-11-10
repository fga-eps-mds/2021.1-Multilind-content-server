const supertest = require("supertest");
import app from '../../../src/app'
const modelLingua = require("../../../src/models/Lingua");


describe("Testes Tronco", () => {
  describe("Testes de criação de Tronco", () => {
    it("Tronco - 200 - Criado com sucesso", async () => {
      const data = { nome: "Tronco-test" };
      const result = await supertest(app).post("/tronco").send(data);
      expect(result.status).toStrictEqual(200);
      expect(result.body).toBeTruthy();
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
    let lingua; 
  
    beforeAll(async () => {
      lingua = await modelLingua.create({ nome: "tupi-guarani" });
    });
    it("Tronco - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/tronco/1");

      expect(result.status).toStrictEqual(200);
   
    });
    it("Tronco - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/tronco");

      expect(result.status).toStrictEqual(200);
      expect(result.body.length).toBeTruthy();

    });

    it("Tronco - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get(`/tronco/lingua/${lingua.id_lingua}`);

      expect(result.status).toStrictEqual(200);
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
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  describe("Testes de deleção de Tronco", () => {
    it("Tronco - 200 - Deletando com sucesso - Por ID", async () => {
      const result = await supertest(app).delete("/tronco/1");
      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        Result: "Tronco deletado com sucesso",
      });
    });
  });
});
