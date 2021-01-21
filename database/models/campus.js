const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  image: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  adress: {
      type: Sequelize.STRING,
      allowNull: false
  }

});

module.exports = Campus;