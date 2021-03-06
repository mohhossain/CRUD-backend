const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  }


});

module.exports = Student;
