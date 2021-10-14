const DateNowNotNull = (Sequelize) => {
  return {
    type: Sequelize.DataTypes.DATE,
    defaultValue: Sequelize.DataTypes.NOW,
    allowNull: false,
  };
};

module.exports = DateNowNotNull;
