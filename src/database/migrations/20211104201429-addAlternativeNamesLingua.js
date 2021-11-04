"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("Lingua", "nomes_alternativos", Sequelize.STRING);
  },

  down: function (queryInterface) {
    // logic for reverting the changes
    return queryInterface.removeColumn("Lingua", "nomes_alternativos");
  },
};
