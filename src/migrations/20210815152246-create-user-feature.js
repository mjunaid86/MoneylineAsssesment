'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserFeatures', {      
      featureName: {
        type: Sequelize.STRING,
        primaryKey: true,        
      },
      email: {
        type: Sequelize.STRING, 
        primaryKey: true,   
      },
      enable: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserFeatures');
  }
};