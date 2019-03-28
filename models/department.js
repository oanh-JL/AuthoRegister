'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    Dname: DataTypes.STRING
  }, {});
  Department.associate = function(models) {
    Department.hasMany(models.Employee);
  };
  return Department;
};