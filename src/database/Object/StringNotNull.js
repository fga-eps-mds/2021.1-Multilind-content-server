const StringNotNull = (Sequelize) => {
  return {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  };
};

module.exports = StringNotNull;
