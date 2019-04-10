'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        len: {
            args: [6, 128],
            msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
            msg: "Email address must be valid"
        }
    }
    },
    avatar: DataTypes.STRING
  },  { });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Category, {
      foreignKey: 'userId'
    });
  };
  return User;
};