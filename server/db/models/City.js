const Sequelize = require('sequelize')
const db = require('../db')

const City = db.define('city', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  coordinates: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
})

module.exports = City
