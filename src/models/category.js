'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  },  { });
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Category;
};