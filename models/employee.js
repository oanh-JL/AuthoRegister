'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    Ename: DataTypes.STRING,
    position: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
   Employee.belongsTo(models.User)
  };
  return Employee;
};