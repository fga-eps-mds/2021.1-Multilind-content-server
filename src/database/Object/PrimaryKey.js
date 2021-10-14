const PrimaryKey = (Sequelize) => {
  return {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  };
};

module.exports = PrimaryKey;
