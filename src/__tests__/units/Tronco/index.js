const modelTronco = require("../../../models/Tronco");
const modelLingua = require("../../../models/Lingua");
const modelConteudo = require("../../../models/Conteudo");
require("../../../database");

describe("\n## TESTES TRONCO\n", () => {
  const troncoName = "Macro-Jê123";
<<<<<<< HEAD
  const linguasNome = ["tupi-guarani", "tupi-guarani2"];
=======
  const linguaNome = ["tupi-guarani", "tupi-guarani2"];
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c

  describe("Listagem de Tronco", () => {
    it("Listando com metodo getAll() com banco vazio", async () => {
      const tronco = await modelTronco.getAll();
      expect(tronco.length).toEqual(0);
    });
    it("Listando com metodo searchByID(1) com banco vazio", async () => {
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toEqual(null);
    });
  });
  describe("Criação de Tronco", () => {
    it("Criando tronco com o metodo create() - 1", async () => {
      const tronco = await modelTronco.create({ nome: "Macro-Jê" });
      expect(tronco).toMatchObject({
        id_tronco: 1,
        nome: "Macro-Jê",
        id_conteudo: 8,
      });
    });
    it("Criando tronco com o metodo create() - 2", async () => {
      const tronco = await modelTronco.create({ nome: "Macro-Jê1" });
      expect(tronco).toMatchObject({
        id_tronco: 2,
        nome: "Macro-Jê1",
        id_conteudo: 9,
      });
    });
  });
  describe("Atualização de Tronco", () => {
    it("Atualizando tronco, com o metodo searchById(1)", async () => {
      await modelTronco.editById({ nome: "Macro-Jê12" }, 1);
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toMatchObject({
        id_tronco: 1,
        nome: "Macro-Jê12",
        id_conteudo: 8,
        linguas: [],
      });
    });
    it("Atualizando tronco, com o metodo searchById(2)", async () => {
      await modelTronco.editById({ nome: troncoName }, 2);
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        nome: troncoName,
        id_conteudo: 9,
        linguas: [],
      });
    });
  });
  describe("Deleção de Tronco", () => {
    it("Deletando Tronco, com o metodo delete(8) através do conteudo", async () => {
      await modelConteudo.delete(8);
      const tronco = await modelTronco.searchById(1);
      expect(tronco).toEqual(null);
    });
  });
  describe("Relacionamento Lingua e Tronco", () => {
    it("Criando lingua com um tronco - 1", async () => {
      const linguas = await modelLingua.create({
<<<<<<< HEAD
        nome: linguasNome[0],
=======
        nome: linguaNome[0],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
        id_tronco: 2,
      });
      expect(linguas).toMatchObject({
        id_conteudo: 10,
        id_tronco: 2,
        id_lingua: 4,
<<<<<<< HEAD
        nome: linguasNome[0],
=======
        nome: linguaNome[0],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
      });
    });
    it("Listando tronco com relacionamento searchById(2) - 1", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        id_conteudo: 9,
        nome: troncoName,
        linguas: [
          {
            id_lingua: 4,
            id_conteudo: 10,
<<<<<<< HEAD
            nome: linguasNome[0],
=======
            nome: linguaNome[0],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
          },
        ],
      });
    });
    it("Criando lingua com um tronco - 2", async () => {
      const linguas = await modelLingua.create({
<<<<<<< HEAD
        nome: linguasNome[1],
=======
        nome: linguaNome[1],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
        id_tronco: 2,
      });
      expect(linguas).toMatchObject({
        id_conteudo: 11,
        id_tronco: 2,
        id_lingua: 5,
<<<<<<< HEAD
        nome: linguasNome[1],
=======
        nome: linguaNome[1],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
      });
    });
    it("Listando tronco com relacionamento searchById(2) - 2", async () => {
      const tronco = await modelTronco.searchById(2);
      expect(tronco).toMatchObject({
        id_tronco: 2,
        id_conteudo: 9,
        nome: troncoName,
        linguas: [
          {
            id_lingua: 4,
            id_conteudo: 10,
<<<<<<< HEAD
            nome: linguasNome[0],
=======
            nome: linguaNome[0],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
          },
          {
            id_lingua: 5,
            id_conteudo: 11,
<<<<<<< HEAD
            nome: linguasNome[1],
=======
            nome: linguaNome[1],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
          },
        ],
      });
    });
    it("Resgatando tronco com id da lingua", async () => {
      const tronco = await modelTronco.getTrunkByLanguage(4);
      expect(tronco).toMatchObject({
        id_lingua: 4,
<<<<<<< HEAD
        nome: linguasNome[0],
=======
        nome: linguaNome[0],
>>>>>>> 47c85e0c2b130ecb7061dd3adb8261ee3129070c
        tronco: {
          id_tronco: 2,
          nome: troncoName,
        },
      });
    });
  });
});
