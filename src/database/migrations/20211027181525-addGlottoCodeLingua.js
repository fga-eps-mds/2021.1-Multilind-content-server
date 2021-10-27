"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("Lingua", "glottocode", Sequelize.STRING);
  },

  down: function (queryInterface) {
    // logic for reverting the changes
    return queryInterface.removeColumn("Lingua", "glottocode");
  },
};
