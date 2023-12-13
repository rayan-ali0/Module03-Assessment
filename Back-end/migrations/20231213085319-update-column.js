'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.changeColumn('Articles','body',{
    type:Sequelize.TEXT,
    allowNull:false 
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Articles','body',{
      type:Sequelize.STRING,
      allowNull:false
    })
  }
};
