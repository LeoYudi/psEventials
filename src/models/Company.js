const { Model, DataTypes } = require('sequelize');
const connection = require('../database');

class Company extends Model { }

Company.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  zip: {
    type: DataTypes.STRING(5)
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: connection,
  timestamps: false
})

module.exports = Company; 