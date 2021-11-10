const supertest = require("supertest");
import app from '../../../src/app'
const modelLingua = require("../../../src/models/Lingua");
const modelPalavra = require("../../../src/models/Palavra");


describe("Testes Palavra", () => {
  let lingua; 
  let palavra; 

  beforeAll(async () => {
    lingua = await modelLingua.create({ nome: "tupi-guarani" });
    palavra = await modelPalavra.create({
      nome: "txãwãrã",
      id_lingua: lingua.id_lingua,
      significado: "Onça",
    });
  });
  describe("Testes de criação de Palavra", () => {

    it("Palavra - 200 - Criado com sucesso", async () => {
      const data = { nome: "dog", significado: "cachorro" };
      const result = await supertest(app).post(`/palavra/${lingua.id_lingua}`).send(data);
      expect(result.status).toStrictEqual(200);
      expect(result.body).toBeTruthy();
    });

    it("Palavra - 400 - Nome Existente", async () => {
      const data = { nome: "dog", significado: "cachorro" };
      const result = await supertest(app).post(`/palavra/${lingua.id_lingua}`).send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Palavra já existente - dog",
      });
    });

    it("Palavra - 400 - Nome Vazio", async () => {
      const data = { nome: "", significado: "cachorro" };
      const result = await supertest(app).post(`/palavra/${lingua.id_lingua}`).send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Palavra inválida - nome: ",
      });
    });
  });

  describe("Testes de listagem Palavra", () => {
    it("Palavra - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get(`/palavra/one/${lingua.id_lingua}/${palavra.id_palavra}`);

      expect(result.status).toStrictEqual(200);
      expect(result.body).toBeTruthy();

    });
    it("Palavra - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get(`/palavra/all/${lingua.id_lingua}`);

      expect(result.status).toStrictEqual(200);
      expect(result.body.palavras.length).toBeTruthy();

    });
  });

  describe("Testes de atualização de Palavra", () => {
    it("Palavra - 200 - Atualizando com sucesso - Por ID", async () => {
      const data = {
        id_palavra: palavra.id_palavra,
        nome: "girafa",
        significado: "animal",
      };
      const result = await supertest(app).put(`/palavra/${lingua.id_lingua}`).send(data);
      expect(result.status).toStrictEqual(200);
      expect(result.body.nome).toBe('girafa');
    });
  });

  describe("Testes de deleção de Palavra", () => {
    it("Palavra - 200 - Deletando com sucesso - Por ID", async () => {
      const result = await supertest(app)
        .delete(`/palavra/${lingua.id_lingua}`)
        .send({ id_palavra: palavra.id_palavra });
      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        Result: "Palavra deletada com sucesso",
      });
    });
  });
});
