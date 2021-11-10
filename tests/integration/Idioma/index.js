const supertest = require("supertest");
import app from '../../../src/app';
const modelLingua = require("../../../src/models/Lingua");
const modelLocalidade = require("../../../src/models/Localidade");


describe("Testes Idioma", () => {
  let lingua; 
  let localidade; 

  beforeAll(async () => {
    lingua = await modelLingua.create({ nome: "tupi-guarani" });
    localidade = await modelLocalidade.create({
      latitude: 123.5,
      longitude: 456.9,
    });
  });

  describe("Testes de criação de Idioma", () => {
    it("Idioma - 200 - Criado com sucesso", async () => {
      const data = {
        id_localidade: localidade.id_localidade,
        id_lingua: lingua.id_lingua,
      };
      const result = await supertest(app).post("/idioma").send(data);
      expect(result.status).toStrictEqual(200);  
      expect(result.body).toBeTruthy();

    });
  });

  describe("Testes de listagem Idioma", () => {
    it("Idioma - 200 - listando com sucesso - Todos", async () => {
      const result = await supertest(app).get("/idioma").send({
        id_localidade: 1,
        id_lingua: 2,
      });

      expect(result.status).toStrictEqual(200);
      expect(result.body.length).toBeTruthy()
    });
  });
});
