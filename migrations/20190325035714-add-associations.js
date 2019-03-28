'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Employees',
    'UserId',{
      type: Sequelize.INTEGER,
      references:{
        model:'Users',
        key:'id',
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL',
    }).then(()=>{
      return queryInterface.addColumn('Employees',
      'DId',{
        type: Sequelize.INTEGER,
        references:{
          model:'Departments',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
      })
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Employees','UserId').
    then(()=>{
      return queryInterface.removeColumn('Employees','DId')
    })
  }
};
