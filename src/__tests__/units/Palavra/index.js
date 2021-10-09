const modelLingua = require("../../../models/Lingua");
const modelPalavra = require("../../../models/Palavra");
const modelConteudo = require("../../../models/Conteudo");

describe("\n## TESTES PALAVRA\n", () => {
  describe("Criação de lingua para cadastrar palavras", () => {
    it("Criando lingua com o metodo create() - ID 3", async () => {
      const palavra = await modelLingua.create({ nome: "tupi-guarani1" });
      expect(palavra).toMatchObject({
        id_conteudo: 5,
        id_lingua: 3,
        nome: "tupi-guarani1",
      });
    });
  });
  describe("Listagem de Palavra", () => {
    it("Listando com metodo searchAll()", async () => {
      const palavra = await modelPalavra.searchAll(3);
      expect(palavra).toMatchObject([
        { id_lingua: 3, id_conteudo: 5, nome: "tupi-guarani1", palavras: [] },
      ]);
    });
    it("Listando com metodo searchByID(1) com banco vazio", async () => {
      const lingua = await modelPalavra.searchById(1, 3);
      expect(lingua).toEqual(null);
    });
  });
  describe("Criação de Palavra", () => {
    it("Criando Palavra com o metodo create() - 1", async () => {
      const palavra = await modelPalavra.create({
        nome: "txãwãrã",
        id_lingua: 3,
        significado: "Onça",
      });
      expect(palavra).toMatchObject({
        id_palavra: 1,
        id_conteudo: 6,
        nome: "txãwãrã",
        id_lingua: 3,
        significado: "Onça",
      });
    });
    it("Criando Palavra com o metodo create() - 2", async () => {
      const palavra = await modelPalavra.create({
        nome: "par",
        id_lingua: 3,
        significado: "Pé",
      });
      expect(palavra).toMatchObject({
        id_palavra: 2,
        id_conteudo: 7,
        nome: "par",
        id_lingua: 3,
        significado: "Pé",
      });
    });
  });
  describe("Atualização de Palavra", () => {
    it("Atualizando Palavra, com o metodo editById(palavra = 1, lingua = 3)", async () => {
      const result = await modelPalavra.editById(
        {
          nome: "teste1234",
          significado: "Test1",
        },
        1,
        3
      );
      expect(result).toEqual([1]);
    });
    it("Atualizando Palavra, com o metodo editById(palavra = 2, lingua = 3)", async () => {
      const result = await modelPalavra.editById(
        {
          nome: "teste123",
          significado: "Test",
        },
        2,
        3
      );
      expect(result).toEqual([1]);
    });
  });
  describe("Listagem de Palavra após a atualização", () => {
    it("Listando com metodo searchByID(palavra = 1, lingua = 3)", async () => {
      const lingua = await modelPalavra.searchById(1, 3);
      expect(lingua).toMatchObject({
        id_palavra: 1,
        id_conteudo: 6,
        nome: "teste1234",
        significado: "Test1",
        lingua: {
          id_conteudo: 5,
          id_lingua: 3,
          nome: "tupi-guarani1",
        },
      });
    });
    it("Listando com metodo searchByID(palavra = 1, lingua = 3)", async () => {
      const lingua = await modelPalavra.searchById(2, 3);
      expect(lingua).toMatchObject({
        id_palavra: 2,
        id_conteudo: 7,
        nome: "teste123",
        significado: "Test",
        lingua: {
          id_conteudo: 5,
          id_lingua: 3,
          nome: "tupi-guarani1",
        },
      });
    });
    it("Listando com metodo searchByName(nomePalavra = 'teste123', lingua = 3)", async () => {
      const lingua = await modelPalavra.searchByName("teste123", 3);
      expect(lingua).toMatchObject({
        id_palavra: 2,
        id_conteudo: 7,
        nome: "teste123",
        significado: "Test",
      });
    });
  });
  describe("Deleção de Palavra", () => {
    it("Deletando Palavra, com o metodo delete(6) na tupla de ID - 3", async () => {
      const result = await modelConteudo.delete(6);
      expect(result).toEqual(1);
    });
  });
});
