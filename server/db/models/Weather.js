const Sequelize = require('sequelize')
const db = require('../db')

const Weather = db.define('weather', {
  timestamp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  temperature: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pressure: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  humidity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  windSpeed: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  windDirection: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Weather

//"ts": "2019-09-25T21:00:00.000Z",
// "tp": 25, // temperature in celcius
// "pr": 1010, // atmospheric pressure in hPa
// "hu": 36, // humidity %
// "ws": 2.1, //wind speed (m/s)
// "wd": 270, // wind direction
// "ic": "01d" // icon weather code
