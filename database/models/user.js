'use strict';
const { Users } = require('../models')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Tasks, {
        as: 'Tasks',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    name: {
      type:DataTypes.STRING(225),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(225)
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING(225),
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    freezeTableName: true
  });
  return User;
};