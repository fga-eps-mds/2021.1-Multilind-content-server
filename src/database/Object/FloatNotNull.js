const FloatNotNull = (Sequelize) => {
  return {
    type: Sequelize.DataTypes.FLOAT,
    allowNull: false,
  };
};

module.exports = FloatNotNull;
