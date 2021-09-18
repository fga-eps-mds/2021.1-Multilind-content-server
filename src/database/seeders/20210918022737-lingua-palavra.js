const insertData = `
  INSERT INTO Conteudo 
  (status, data_submissao) VALUES ('pendente','2021-09-17 22:52:15');

  INSERT INTO Conteudo 
  (status, data_submissao) VALUES ('pendente','2021-09-17 22:52:15');

  INSERT INTO Conteudo 
  (status, data_submissao) VALUES ('pendente','2021-09-17 22:52:15');

  INSERT INTO Conteudo 
  (status, data_submissao) VALUES ('pendente','2021-09-17 22:52:15');

  INSERT INTO Conteudo 
  (status, data_submissao) VALUES ('pendente','2021-09-17 22:52:15');

  INSERT INTO Lingua 
  (id_conteudo, nome) VALUES(1 , 'Tupi');

  INSERT INTO Palavra 
  (id_lingua, id_conteudo, nome, significado) VALUES ('1', '2', 'Abacaxi', 'FRUTA');
  
  INSERT INTO Palavra
  (id_lingua, id_conteudo, nome, significado) VALUES ('1', '3', 'Acre', 'ESTADO');
  
  INSERT INTO Palavra
  (id_lingua, id_conteudo, nome, significado) VALUES ('1', '4', 'Amapá', 'ESTADO');
  
  INSERT INTO Palavra
  (id_lingua, id_conteudo, nome, significado) VALUES ('1', '5', 'amendoim', 'GRÃO');
`;

const deleteData = `DELETE FROM Lingua`;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.sequelize.query(insertData, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.sequelize.query(deleteData, { transaction });
      await queryInterface.sequelize.query({ transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
