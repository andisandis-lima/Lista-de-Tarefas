'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tasks.belongsTo(models.Users, {
        as: 'tasks',
        foreignKey: 'user_id',
        onDelete: 'RESTRICT'
      });
    }
  }
  Tasks.init({
    title: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    description: DataTypes.STRING(1000),
    conclued: { 
    type: DataTypes.BOOLEAN,
    defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: 'Tasks',
    freezeTableName: true
  });
  return Tasks;
};