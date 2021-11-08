const supertest = require("supertest");
const app = require("../../../src/app");

describe("Testes Palavra", () => {
  describe("Testes de criação de Palavra", () => {
    it("Palavra - 200 - Criado com sucesso", async () => {
      const data = { nome: "dog", significado: "cachorro" };
      const result = await supertest(app).post("/palavra/2").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = {
        id_palavra: 1,
        nome: "dog",
        id_lingua: "2",
        significado: "cachorro",
        id_conteudo: 5,
      };
      expect(result.body).toMatchObject(dataResult);
    });

    it("Palavra - 200 - Criado com sucesso - 2", async () => {
      const data = { nome: "cat", significado: "gato" };
      const result = await supertest(app).post("/palavra/2").send(data);
      expect(result.status).toStrictEqual(200);
      const dataResult = {
        id_palavra: 2,
        nome: "cat",
        id_lingua: "2",
        significado: "gato",
        id_conteudo: 6,
      };
      expect(result.body).toMatchObject(dataResult);
    });

    it("Palavra - 400 - Nome Existente", async () => {
      const data = { nome: "dog", significado: "cachorro" };
      const result = await supertest(app).post("/palavra/2").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Palavra já existente - dog",
      });
    });

    it("Palavra - 400 - Nome Vazio", async () => {
      const data = { nome: "", significado: "cachorro" };
      const result = await supertest(app).post("/palavra/2").send(data);

      expect(result.status).toStrictEqual(400);
      expect(result.body).toMatchObject({
        error: "Palavra inválida - nome: ",
      });
    });
  });

  describe("Testes de listagem Palavra", () => {
    it("Palavra - 200 - listando com sucesso - Por ID", async () => {
      const result = await supertest(app).get("/palavra/one/2/2");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_palavra: 2,
        nome: "cat",
        significado: "gato",
        id_conteudo: 6,
      });
    });
    it("Palavra - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/palavra/all/2");

      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_conteudo: 2,
        id_lingua: 2,
        nome: "tupi-guarani",
        palavras: [
          {
            id_palavra: 1,
            nome: "dog",
            significado: "cachorro",
            id_conteudo: 5,
          },
          {
            id_palavra: 2,
            nome: "cat",
            significado: "gato",
            id_conteudo: 6,
          },
        ],
      });
    });
  });

  describe("Testes de atualização de Palavra", () => {
    it("Palavra - 200 - Atualizando com sucesso - Por ID", async () => {
      const data = {
        id_palavra: 1,
        nome: "girafa",
        significado: "animal",
      };
      const result = await supertest(app).put("/palavra/2").send(data);
      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        id_palavra: 1,
        id_conteudo: 5,
        nome: "girafa",
        significado: "animal",
        lingua: {
          id_lingua: 2,
          id_conteudo: 2,
          nome: "tupi-guarani",
        },
      });
    });
  });

  describe("Testes de deleção de Palavra", () => {
    it("Palavra - 200 - Deletando com sucesso - Por ID", async () => {
      const result = await supertest(app)
        .delete("/palavra/2")
        .send({ id_palavra: 1 });
      expect(result.status).toStrictEqual(200);
      expect(result.body).toMatchObject({
        Result: "Palavra deletada com sucesso",
      });
    });
  });
});
