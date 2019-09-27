const Sequelize = require('sequelize')
const db = require('../db')

const Pollution = db.define('pollution', {
  timestamp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  aqi: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mainPollutant: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Pollution

//"ts": "2019-09-25T21:00:00.000Z",
//"aqius": 25, // AQI value pased on US EPA standard
//"mainus": "p2", // main pollutant for US AQI
