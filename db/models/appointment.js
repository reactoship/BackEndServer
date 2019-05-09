const Sequelize = require('sequelize');
const db = require('../db');

const Appointment = db.define('appointment', {
  time: {
    type: Sequelize.DATE
  },
  location: {
    type: Sequelize.STRING
  }
});

module.exports = Appointment;
